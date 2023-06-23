import React, {
  useEffect,
  useState,
} from "react";
import axios from "../axios/axios";
import { Navigate } from "react-router-dom";
import Alert from "../components/Alert/Alert";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const SignInPage = () => {
  useEffect(() => {
    axios
      .get("/profile")
      .then((response) => {
        if (response.data) setRedirect(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const [alert, setAlert] = useState({
    show: false,
    type: "SUCCESS",
    text: "",
  });

  const responseGoogle = async (response) => {
    const userData = jwt_decode(
      response.credential
    );
    await axios.post("/create-token", {
      username: userData.name,
      email: userData.email,
    });
    axios.get("/profile").then((response) => {
      if (response.data) setRedirect(true);
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
      await axios.post("/sign-in", formData);
      axios.get("/profile").then((response) => {
        console.log(response);
      });
      setRedirect(true);
    } catch ({ response }) {
      if (response?.status === 409) {
        setAlert({
          show: true,
          type: "ERROR",
          text: "Email not found",
        });
        timeOutAlert();
      } else {
        setAlert({
          show: true,
          type: "ERROR",
          text: "Wrong Credentials",
        });
        timeOutAlert();
      }
    }
  };

  if (redirect) {
    return <Navigate to={"/home"} />;
  }

  return (
    <section className="h-screen">
      {alert.show && (
        <Alert
          type={alert.type}
          text={alert.text}
        />
      )}
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
                htmlFor="email"
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
              <p className="text-red-700 text-xs italic hidden">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/sign-up"
              >
                sign up?
              </a>
            </div>
            <p className="text-center opacity-50 my-2">
              -----or-----
            </p>
            <div className="flex flex-col items-center">
              {/* Add the GoogleLogin component */}
              <GoogleLogin
                isSignedIn={true}
                prompt="select_account"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onError={() => {
                  setAlert({
                    show: true,
                    text: "Login failed",
                    type: "ERROR",
                  });
                }}
              />
            </div>
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
