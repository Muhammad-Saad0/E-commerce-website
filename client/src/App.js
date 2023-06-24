import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import Admin from "./pages/Admin";
import AdminLayout from "./components/AdminLayout";
import CreateProduct from "./pages/CreateProduct";
import AdminProducts from "./pages/AdminProducts";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<SignInPage />}
          />
          <Route
            path="/home"
            exact
            element={<Home />}
          />
          <Route
            path="/sign-up"
            exact
            element={<SignUpPage />}
          />
          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route index element={<Admin />} />
            <Route
              path="create-product"
              element={<CreateProduct />}
            />
            <Route
              path="products"
              element={<AdminProducts />}
            />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
