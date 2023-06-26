import React from "react";
import ProductTable from "../components/ProductTable";

const dummyProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "https://example.com/product1.jpg",
    price: 19.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://example.com/product2.jpg",
    price: 29.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://example.com/product3.jpg",
    price: 39.99,
  },
];

const AdminProducts = () => {
  return (
    <div className="p-10 mt-[70px] w-full">
      <ProductTable products={dummyProducts} />
    </div>
  );
};

export default AdminProducts;
