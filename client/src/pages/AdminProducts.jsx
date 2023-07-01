import React from "react";
import ProductTable from "../components/ProductTable";
import { useSelector } from "react-redux";

const AdminProducts = () => {
  const productsFromStore = useSelector(
    (state) => state.products.products
  );

  return (
    <div className="p-10 mt-[70px] w-full">
      <ProductTable
        products={productsFromStore}
      />
    </div>
  );
};

export default AdminProducts;
