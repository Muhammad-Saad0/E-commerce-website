import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../axios/axios";
import FileBase from "react-file-base64";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/add-product", formData);
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") {
      }
      if (error.response.status === 409) {
        console.log(
          "Product with same name already exists"
        );
      }
    }
  };
  return (
    <div className="px-5 mt-[80px] w-1/2">
      <div>
        <h1 className="text-3xl">
          Add New Product
        </h1>
        <form
          onSubmit={handleFormSubmit}
          class="px-10 py-5 rounded-[8px]
        shadow-xl"
        >
          <div class="mb-4">
            <label
              for="productName"
              class="block text-gray-700"
            >
              Product Name:
            </label>
            <input
              onChange={(event) => {
                setFormData((state) => {
                  return {
                    ...formData,
                    name: event.target.value,
                  };
                });
              }}
              required
              id="productName"
              type="text"
              class="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
              placeholder="Enter product name"
            />
          </div>
          <div class="mb-4">
            <label
              for="productImage"
              class="block text-gray-700"
            >
              Product Image:
            </label>
            <div className="border border-gray-300 px-4 py-2">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFormData({
                    ...formData,
                    image: base64,
                  })
                }
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              for="productPrice"
              class="block text-gray-700"
            >
              Product Price:
            </label>
            <input
              id="productPrice"
              type="number"
              class="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
              placeholder="Enter product price"
              onChange={(event) => {
                setFormData((state) => {
                  return {
                    ...formData,
                    price: event.target.value,
                  };
                });
              }}
            />
          </div>
          <div class="mb-4">
            <label
              for="productCategory"
              class="block text-gray-700"
            >
              Product Category:
            </label>
            <input
              onChange={(event) => {
                setFormData((state) => {
                  return {
                    ...formData,
                    category: event.target.value,
                  };
                });
              }}
              id="productCategory"
              type="text"
              class="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
              placeholder="Enter product category"
            />
          </div>
          <div class="mb-4">
            <label
              for="productDescription"
              class="block text-gray-700"
            >
              Product Description:
            </label>
            <textarea
              onChange={(event) => {
                setFormData((state) => {
                  return {
                    ...formData,
                    description:
                      event.target.value,
                  };
                });
              }}
              id="productDescription"
              class="form-textarea mt-1 block w-full border border-gray-300 px-4 py-2"
              rows="3"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
