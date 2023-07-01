import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { useEffect } from "react";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import CreateProduct from "./pages/CreateProduct";
import AdminProducts from "./pages/AdminProducts";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import EditProduct from "./pages/EditProduct";
import ProductsPage from "./pages/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="font-poppins">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<SignInPage />}
          />
          <Route
            path="/products"
            exact
            element={<ProductsPage />}
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
            <Route
              index
              element={<AdminDashboard />}
            />
            <Route
              path="create-product"
              element={<CreateProduct />}
            />
            <Route
              path="products"
              element={<AdminProducts />}
            />
            <Route
              path="edit-product/:id"
              element={<EditProduct />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
