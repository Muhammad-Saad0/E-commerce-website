import React, { useState } from "react";
import axios from "../axios/axios";
import Alert from "../components/Alert/Alert";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    type: "SUCCESS",
    text: "",
  });

  const clearFormData = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const timeOutAlert = () => {
    setTimeout(() => {
      setAlert((state) => {
        return {
          ...state,
          show: false,
        };
      });
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/register",
        formData
      );
      console.log(response);
      clearFormData();
      setAlert({
        show: true,
        type: "SUCCESS",
        text: "user has been registered successfully",
      });
      timeOutAlert();
    } catch (error) {
      console.log(error.message);
      setAlert({
        show: true,
        type: "ERROR",
        text: "the Email entered is already registered",
      });
      timeOutAlert();
    }
  };

  return (
    <div className="flex flex-row w-full h-screen items-center justify-center">
      {alert.show && (
        <Alert
          type={alert.type}
          text={alert.text}
        />
      )}
      <img
        className="object-contain w-1/3"
        src="/sign-up.jpg"
        alt=""
      />
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-semibold text-center">
            Sign up
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              required
              value={formData.username}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  username: event.target.value,
                });
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              required
              value={formData.email}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  email: event.target.value,
                });
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={formData.password}
              required
              onChange={(event) => {
                setFormData({
                  ...formData,
                  password: event.target.value,
                });
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic hidden">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
