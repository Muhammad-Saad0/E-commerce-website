import express from "express";
import UserModel from "../models/userModel.js";
import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createToken } from "../util-functions/functions.js";
import multer from "multer";
import storage from "../util-functions/multer.js";
dotenv.config();

const upload = multer({ storage: storage });
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
  createToken(
    {
      username: userDoc.username,
      email: email,
    },
    secret
  )
    .then((token) => {
      // Sending the token back as a cookie
      res.cookie("token", token).json({
        username: userDoc.username,
        email: email,
      });
    })
    .catch((err) => {
      throw err;
    });
});

Router.post("/create-token", (req, res) => {
  const userData = req.body;
  createToken(userData, secret)
    .then((token) => {
      // Sending the token back as a cookie
      res.cookie("token", token).json(userData);
    })
    .catch((err) => {
      throw err;
    });
});

Router.get("/logout", async (req, res) => {
  const { token } = req.cookies;
  // READING THE TOKEN
  res.cookie("token", "").json("logged out");
});

Router.get("/profile", async (req, res) => {
  const { token } = req.cookies;
  // READING THE TOKEN
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) console.log("Empty token");
    res.json(info);
  });
});

Router.post(
  "/add-product",
  upload.single("image"),
  (req, res) => {
    console.log(req.file);
  }
);

export default Router;
