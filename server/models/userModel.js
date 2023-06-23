import mongoose from "mongoose";
import { Schema } from "mongoose";

// Define the user schema
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the User model
const User = mongoose.model("User", UserSchema);

export default User;
