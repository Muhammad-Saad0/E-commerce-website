import React from "react";
import {
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const ProductTable = ({ products }) => {
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
          <tr class="bg-white border-gray-700">
            <td className="py-2 px-4 border-b">
              <img
                src=""
                alt="product-image"
                className="w-16 h-16 object-contain"
              />
            </td>
            <td class="px-6 py-4">
              Apple Macbook 2020
            </td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4 flex gap-3 flex-row">
              <a href="/admin">
                <PencilSquareIcon className="w-6 h-6 text-green-500" />
              </a>
              <button>
                <TrashIcon className="w-6 h-6 text-red-700" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    // <table className="min-w-full border border-gray-300">
    //   <thead className="border-y-2 border-cyan-400">
    //     <tr>
    //       <th className="py-2 px-4 border-b">
    //         Image
    //       </th>
    //       <th className="py-2 px-4 border-b">
    //         Price
    //       </th>
    //       <th className="py-2 px-4 border-b">
    //         Options
    //       </th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {products.map((product) => (
    //       <tr key={product.id}>
    //         <td className="py-2 px-4 border-b">
    //           <img
    //             src={product.image}
    //             alt={product.name}
    //             className="w-16 h-16 object-contain"
    //           />
    //         </td>
    //         <td className="py-2 px-4 border-b">
    //           {product.price}
    //         </td>
    //         <td className="py-2 px-4 border-b">
    //           <button className="bg-blue-500 text-white py-1 px-2 rounded-md">
    //             Edit
    //           </button>
    //           {/* Add other options or buttons here */}
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default ProductTable;
