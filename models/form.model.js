const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    user_id: {
        type: String,
        required: false,
      },
      fullname: {
      type: String,
      required: false,
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    pincode: {
        type: String,
        required: false,
    },
    carbuyingbudget: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },   
    paymentType: {
        type: String,
        required: false,
    },
    plan: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: false,
    },
    totalPrice: {
        type: String,
        required: false,
    },   
  },
  { timestamps: true }
);
module.exports = mongoose.model("form", formSchema);
