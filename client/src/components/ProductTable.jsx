import React, { useState } from "react";
import {
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import ConfirmModal from "./ConfirmModal";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const ProductTable = ({ products }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] =
    useState(false);
  const [currentProductId, setCurrentProductId] =
    useState("");
  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    try {
      console.log(currentProductId);
      dispatch(deleteProduct(currentProductId));
    } catch (error) {}
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left">
        <thead class="text-xs text-white uppercase bg-primary">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product Image
            </th>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => {
            return (
              <tr
                key={index}
                class={`${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-200"
                } border-gray-700`}
              >
                <td className="py-2 px-4 border-b">
                  <img
                    src={product.image}
                    alt="product"
                    className="w-28 h-20 object-contain"
                  />
                </td>
                <td class="px-6 py-4 border-b">
                  {product.name}
                </td>
                <td class="px-6 py-4 border-b">
                  {product.category}
                </td>
                <td class="px-6 py-4 border-b">
                  ${product.price}
                </td>
                <td class="px-6 py-4 border-b">
                  <div className="flex flex-row gap-4">
                    <Link
                      to={`/admin/edit-product/${product._id}`}
                    >
                      <PencilSquareIcon className="w-6 h-6 text-green-500" />
                    </Link>
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setCurrentProductId(
                          product._id
                        );
                      }}
                    >
                      <TrashIcon className="w-6 h-6 text-red-700" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ConfirmModal
        showModal={showModal}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default ProductTable;
