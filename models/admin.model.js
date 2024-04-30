const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: Boolean,
  },
  { timestamps: true }
);
module.exports = mongoose.model("admin", userSchema);
