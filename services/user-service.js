const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

async function findUser(email, password) {
  try {
    const user = await User.find({ email: email, password: password });
    if (user) {
      return user;
    }
  } catch (error) {
    console.log("Couldn't find this user", error);
  }
}

module.exports = { findUser };
