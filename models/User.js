const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    isStaff: {
      type: Boolean,
      default: false,
      required: true
    }
});
  

const User = mongoose.model("User", UserSchema);

module.exports = User;
    