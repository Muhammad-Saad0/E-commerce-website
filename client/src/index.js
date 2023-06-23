import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ActivePageProvider from "./contexts/activePageContext/ActivePageProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <GoogleOAuthProvider clientId="932080830146-5kscsl7fnbnc17kcov4k1f95urhff651.apps.googleusercontent.com">
    <ActivePageProvider>
      <App />
    </ActivePageProvider>
  </GoogleOAuthProvider>
);
