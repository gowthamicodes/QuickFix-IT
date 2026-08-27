const mongoose = require("mongoose")

const Payment = new mongoose.Schema({

userId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Users",
required: true
},

name: {
    type: String,
    required: true
},

email: { 
    type:String,
    required: true
},

service: {
 type: String,
    required: true
},

amount: {
type: Number,
required: true
},

razorpayOrderId: {
type: String,
default: null

},

razorpayPaymentId: {
type: String,
default: null

},
status: {
type: String,
enum: [ "created", "paid", "failed"],
default: "created"

}

})


module.exports = mongoose.model("payment", Payment)