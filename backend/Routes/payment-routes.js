const express = require("express");

const router = express.Router();

const checkAuth = require("../Auth/auth")

const paymentController = require("../Controller/payment-controller")

router.use(checkAuth);

router.post("/create-order", paymentController.createOrder);

router.post("/verify-payment", paymentController.verifyPayment)

router.get("/check-access/:service", paymentController.checkServiceAccess)


module.exports = router;