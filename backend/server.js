require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");

const usersRoutes = require("./Routes/users-routes")

const paymentRoutes = require("./Routes/payment-routes")

const app = express();

app.use(cors());
app.use(express.json());

const dns = require('node:dns').promises;
dns.setServers(["1.1.1.1", "8.8.8.8"]);

app.get("/",(_req,res) => {
    res.send("QuickFix IT Backend is running");
})

app.use("/api/users", usersRoutes)

app.use("/api/payment", paymentRoutes)
console.log("Razorpay Key ID exists:", !!process.env.RAZORPAY_KEY_ID);
console.log("Razorpay Secret exists:", !!process.env.RAZORPAY_KEY_SECRET);
   console.log("key_prefix:", process.env.RAZORPAY_KEY_ID?.substring(0, 9)) 

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MONGODB");

    const PORT = process.env.PORT || 5000;
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed:", error)
})



