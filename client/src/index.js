import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ActivePageProvider from "./contexts/activePageContext/ActivePageProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

store.subscribe(() => {
  console.log(store.getState());
});
root.render(
  <GoogleOAuthProvider clientId="932080830146-5kscsl7fnbnc17kcov4k1f95urhff651.apps.googleusercontent.com">
    <Provider store={store}>
      <ActivePageProvider>
        <App />
      </ActivePageProvider>
    </Provider>
  </GoogleOAuthProvider>
);
