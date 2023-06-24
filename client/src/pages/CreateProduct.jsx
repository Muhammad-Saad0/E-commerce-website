import React from "react";

const CreateProduct = () => {
  return (
    <div className="px-5 mt-[80px] w-1/2">
      <div>
        <h1 className="text-3xl">
          Add New Product
        </h1>
        <form
          method="post"
          enctype="multipart/form-data"
          action="/add-product"
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
            <input
              id="productImage"
              type="file"
              class="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
              placeholder="Enter product image URL"
            />
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
              type="text"
              class="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
              placeholder="Enter product price"
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
