const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: false,
    },
    lastname: {
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
    message: {
        type: String,
        required: false,
    },   
  },
  { timestamps: true }
);
module.exports = mongoose.model("Contact", contactSchema);
