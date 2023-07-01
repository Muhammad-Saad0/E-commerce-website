import React, {
  useEffect,
  useState,
} from "react";
import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { updateProduct } from "../redux/actions/productActions";

const EditProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const { id } = useParams();
  const productsFromStore = useSelector(
    (state) => state.products.products
  );
  useEffect(() => {
    const product = productsFromStore.find(
      (obj) => obj._id === id
    );
    setFormData(product);
  }, [productsFromStore]);

  const handleFormSubmit = (formData) => {
    dispatch(updateProduct(formData, id));
  };
  return (
    <section className="p-10 mt-[70px] min-w-1/2 w-3/5">
      <h1 className="text-3xl">Edit Product</h1>
      <ProductForm
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </section>
  );
};

export default EditProduct;
