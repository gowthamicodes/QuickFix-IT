import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";

function Payment() {

    const navigate = useNavigate();
    const location = useLocation();

    const service = location.state?.service || "Career Counseling";

    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login before making a payment");
                navigate("/login");
                return;
            }

            // 1. Ask backend to create Razorpay order
            const response = await fetch(
                "https://quickfix-it.onrender.com/api/payment/create-order",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        service: service
                    })
                }
            );

            const data = await response.json();

            console.log("ORDER RESPONSE:", data);

            if (!response.ok) {
                alert(data.message || "Could not create payment");
                return;
            }

            // 2. Razorpay Checkout options
            const options = {

                key: "rzp_test_TRyWXkEqAfeujJ",

                amount: data.order.amount,

                currency: data.order.currency,

                name: "QuickFix IT",

                description: service,

                order_id: data.order.id,

                handler: async function (response) {

                    console.log("PAYMENT RESPONSE:", response);

                    const token = localStorage.getItem("token");

                    try {

                        const verifyResponse = await fetch(
                            "https://quickfix-it.onrender.com/api/payment/verify-payment",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": `Bearer ${token}`

                                },

                                body: JSON.stringify({
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_signature: response.razorpay_signature
                                })

                            }
                        )

                        const verifyData = await verifyResponse.json();

                        console.log("VERIFY RESPONSE:", verifyData);

                        if (!verifyResponse.ok) {
                            alert(verifyData.message || "payment verification failed");
                            return;

                        }


                        // Temporary navigation.
                        // We will replace this with backend
                        // payment verification next.
                        navigate("/Services/Payment-Success", {
                            state: {
                                service: service,
                                paymentId: response.razorpay_payment_id,
                                orderId: response.razorpay_order_id

                            }
                        });

                    } catch (error) {

                        console.error("Payment verification error:", error);
                        alert("Could not verify payment");

                    }

                },

                prefill: {
                    name: "",
                    email: ""
                },

                theme: {
                    color: "#3399cc"
                }
            };

            // 3. Open Razorpay Checkout
            const razorpay = new window.Razorpay(options);

            razorpay.open();

        } catch (error) {

            console.error("Payment error:", error);

            alert("Something went wrong with payment");

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="payment-page">

            <div className="payment-card">

                <h1>Complete Your Payment</h1>

                <p className="payment-intro">
                    You are purchasing access to:
                </p>

                <div className="payment-service">

                    <h2>{service}</h2>

                    <div className="payment-price">
                        ₹499
                    </div>

                </div>

                <div className="payment-section">

                    <h3>Secure Payment</h3>

                    <p>
                        Click the button below to pay securely
                        using Razorpay.
                    </p>

                </div>

                <button
                    className="paid-btn"
                    onClick={handlePayment}
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Pay ₹499"}
                </button>

            </div>

        </div>
    );
}

export default Payment;


