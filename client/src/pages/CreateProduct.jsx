import React from "react";
import { useState } from "react";
import { addProduct } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import ProductForm from "../components/ProductForm";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const handleFormSubmit = async (event) => {
    dispatch(addProduct(formData));
  };
  return (
    <div className="px-5 mt-[80px] w-1/2">
      <div>
        <h1 className="text-3xl">
          Add New Product
        </h1>
        <ProductForm
          handleFormSubmit={handleFormSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default CreateProduct;
