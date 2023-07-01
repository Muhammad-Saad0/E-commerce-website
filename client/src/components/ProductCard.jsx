import React from "react";
import { addToCart } from "../utils/functions";

const ProductCard = ({ product }) => {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
      <a href="#">
        <img
          class="py-4 px-3 rounded-t-lg w-[500px] h-[250px] object-cover"
          src={product.image}
          alt="product"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900">
            {product.name}
          </h5>
        </a>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-orange-600">
            ${product.price}
          </span>
          <button
            onClick={() => {
              addToCart(product);
            }}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
