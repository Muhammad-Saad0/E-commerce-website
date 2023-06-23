import express from "express";
import UserModel from "../models/userModel.js";
import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET;

const Router = express.Router();
Router.post(
  "/register",
  async function (req, res) {
    console.log("Route Reached");
    const User = req.body;
    const encryptedPassword = await brcypt.hash(
      User.password,
      12
    );
    User.password = encryptedPassword;
    const newUser = new UserModel(User);
    try {
      const userDoc = await newUser.save();
      console.log("Save Successfull");
      res.status(201).json(userDoc);
    } catch (error) {
      console.log(error.message);
      res
        .status(409)
        .json({ message: error.message });
    }
  }
);

Router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await UserModel.findOne({
    email: email,
  });
  if (!userDoc)
    return res
      .status(409)
      .json("No such email is registered");
  const response = await brcypt.compare(
    password,
    userDoc.password
  );
  if (!response)
    return res
      .status(400)
      .json("wrong credentials");
  jwt.sign(
    {
      username: userDoc.username,
      email: email,
      id: userDoc._id,
    },
    secret,
    {},
    (err, token) => {
      if (err) throw err;
      //SENDING THE TOKEN BACK AS A COOKIE
      res.cookie("token", token).json({
        username: userDoc.username,
        email: email,
        id: userDoc._id,
      });
    }
  );
});

Router.get("/profile", async (req, res) => {
  const { token } = req.cookies;
  // READING THE TOKEN
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) console.log("Empty token");
    res.json(info);
  });
});

export default Router;
