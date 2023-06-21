import React, { useState } from "react";
import axios from "../axios/axios";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/sign-in");
  };
  return (
    <section className="h-screen">
      <div className="flex flex-row w-full h-screen items-center justify-center">
        <img
          className="object-contain w-1/3"
          src="/SignIn.jpg"
          alt=""
        />
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
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
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <p className="text-center opacity-50 my-2">
              -----or-----
            </p>
            <button
              className="bg-orange-500 text-white w-full text-center py-2 rounded-[6px] font-semibold"
              type="button"
            >
              Sign In with Google
            </button>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
