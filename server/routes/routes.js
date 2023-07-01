import express, { response } from "express";
import UserModel from "../models/userModel.js";
import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createToken } from "../util-functions/functions.js";
import ProductModel from "../models/productModel.js";
dotenv.config();

const secret = process.env.SECRET;

const Router = express.Router();
Router.post(
  "/register",
  async function (req, res) {
    console.log("Route Reached");
    const User = req.body;
    if (User.password) {
      const encryptedPassword = await brcypt.hash(
        User.password,
        12
      );
      User.password = encryptedPassword;
    }
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
  if (!userDoc.password) {
    return res
      .status(400)
      .json("wrong credentials");
  }
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
      id: userDoc._id,
    },
    secret
  )
    .then((token) => {
      // Sending the token back as a cookie
      res.cookie("token", token).json({
        username: userDoc.username,
        email: email,
        cart: userDoc.cart,
        id: userDoc._id,
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

Router.post("/add-product", async (req, res) => {
  const product = req.body;
  console.log(product);
  const newProduct = new ProductModel(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error.message);
    res.status(409).json("Duplicate Name");
  }
});

Router.get(
  "/fetch-products",
  async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (error) {
      res
        .status(404)
        .json({ message: error.message });
    }
  }
);
Router.post(
  "/delete-product:id",
  async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      await ProductModel.deleteOne({
        _id: id,
      });
      res
        .status(200)
        .json("Deleted Successfully");
    } catch (error) {
      res.status(409).json("Delete Failed");
    }
  }
);

Router.post(
  "/update-product/:id",
  async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const newProduct = req.body.productData;
    ProductModel.updateOne(
      { _id: id },
      {
        $set: {
          name: newProduct.name,
          description: newProduct.description,
          category: newProduct.category,
          image: newProduct.image,
          price: newProduct.price,
        },
      }
    )
      .then((response) => {
        console.log("SUCCESSFULL");
        res
          .status(200)
          .json("UPDATE SUCCESSFULL");
      })
      .catch((error) => {
        res.status(409).json("UPDATE FAILED");
      });
  }
);

Router.post("/fetch-cart", async (req, res) => {
  const email = req.body.email;
  console.log(email);
  UserModel.findOne({ email: email })
    .then((response) => {
      res.status(200).json(response.cart);
    })
    .catch((error) => {
      res.status(409).json("Fetch Failed");
    });
});

export default Router;
