import React, { useEffect } from "react";
import FileBase from "react-file-base64";
import categories from "../constants/categories";

const ProductForm = ({
  handleFormSubmit,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmit(formData);
      }}
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
          value={formData?.name}
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
            value={formData?.image}
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
          value={formData?.price}
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
        <div class="relative">
          <select
            class="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
            onChange={(event) => {
              setFormData((state) => {
                return {
                  ...formData,
                  category: event.target.value,
                };
              });
            }}
          >
            <option disabled selected>
              Categories
            </option>
            {categories.map((category) => {
              return <option>{category}</option>;
            })}
          </select>
        </div>
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
                description: event.target.value,
              };
            });
          }}
          value={formData?.description}
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
  );
};

export default ProductForm;
