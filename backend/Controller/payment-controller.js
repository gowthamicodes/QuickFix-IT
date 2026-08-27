const Razorpay = require("razorpay");
const crypto = require("crypto");

const Payment = require("../Model.schema/payment-model");
const Users = require("../Model.schema/users-model");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

const createOrder = async (req, res) => {

    try {

        console.log("USER DATA FROM JWT:", req.userData);

        const { service } = req.body;

        const userId = req.userData.userId;

        console.log("USER ID:", userId);

        const user = await Users.findById(userId);

        console.log("USER FROM MONGODB:", user);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const options = {
            amount: 49900,
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };

        console.log("CREATING RAZORPAY ORDER...");

        const order = await razorpay.orders.create(options);

        console.log("RAZORPAY ORDER:", order);

        const payment = new Payment({

            userId: user._id,

            name: user.name,

            email: user.email,

            service: service || "Career Counseling",

            amount: 499,

            razorpayOrderId: order.id,

            status: "created"

        });

        await payment.save();

        console.log("PAYMENT SAVED:", payment);

        return res.status(200).json({

            message: "Order created successfully",

            order,

            payment

        });

    } catch (error) {

        console.error("PAYMENT ERROR:", error);

        return res.status(500).json({
            message: "Could not create payment order"
        });
    }
};


const verifyPayment = async (req, res) => {

    try {
        const {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
        } = req.body;

        console.log("payment ID:", razorpay_payment_id);
        console.log("order ID:", razorpay_order_id);
        console.log("signature:", razorpay_signature)

        const generatedSignature = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(
                razorpay_order_id + "|" + razorpay_payment_id
            )
            .digest("hex");

        console.log("generated signature:", generatedSignature);

        if (generatedSignature !== razorpay_signature) {


            return res.status(400).json({
                message: "Payment verification failed"
            })
        }

        const payment = await Payment.findOne({
            razorpayOrderId: razorpay_order_id
        })

        if (!payment) {
            return res.status(404).json({
                message: "Payment record not found"
            })
        }
        payment.razorpayPaymentId = razorpay_payment_id
        payment.status = "paid";

        await payment.save();

        console.log("payment verified:", payment);

        return res.status(200).json({
            message: "Payment verified successfully",
            payment
        })

    } catch (error) {
        console.error("VERIFY PAYMENT ERROR:", error);

        return res.status(500).json({
            message: "Payment verification failed"
        });

    }
}

const checkServiceAccess = async (req, res) => {

    try {   

        const userId = req.userData.userId;
        const service = req.params.service;

        console.log("CHECK ACCESS USER:", userId);
        console.log("CHECK ACCESS SERVICE:", service);

        const payment = await Payment.findOne({
            userId: userId,
            service: service,
            status: "paid"
        });

        if (!payment) {

            return res.status(403).json({
                access: false,
                message: "Payment required to access this service"
            });
        }

        return res.status(200).json({
            access: true,
            message: "Service access granted"
        });

    } catch (error) {

        console.error("CHECK ACCESS ERROR:", error);

        return res.status(500).json({
            access: false,
            message: "Could not check service access"
        });
    }
};



module.exports = {
    createOrder,
    verifyPayment,
    checkServiceAccess

};