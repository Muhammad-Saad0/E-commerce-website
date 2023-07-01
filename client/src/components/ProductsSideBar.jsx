/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { setCategory } from "../redux/actions/filterActions";
import categories from "../constants/categories";
import { setPrice } from "../redux/actions/filterActions";
import { clearFilters } from "../redux/actions/filterActions";

const ProductsSideBar = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products.products
  );
  const price = useSelector(
    (state) => state.filter.price
  );
  const categoryFromStore = useSelector(
    (state) => state.filter.category
  );

  useEffect(() => {
    dispatch(setPrice(findMaxPrice(products)));
  }, [products]);

  function findMaxPrice(products) {
    if (products.length === 0) {
      return 0; // Return null or handle the case when the array is empty
    }

    return products.reduce(
      (maxPrice, product) => {
        if (product.price > maxPrice) {
          return product.price;
        } else {
          return maxPrice;
        }
      },
      products[0].price
    );
  }

  return (
    <aside class="w-full p-6 sm:w-60">
      <nav class="space-y-8 text-sm font-poppins">
        <h2 className="font-semibold text-[24px] opacity-80">
          Categories
        </h2>
        <div className="text-[18px] flex flex-col gap-1">
          {categories.map((category) => {
            return (
              <>
                <p
                  onClick={() => {
                    dispatch(
                      setCategory(category)
                    );
                  }}
                  className={`flex flex-row gap-2 cursor-pointer ${
                    categoryFromStore ==
                      category &&
                    "text-orange-600 font-semibold"
                  }`}
                >
                  <ArrowRightIcon className="w-6 h-4" />
                  {category}
                </p>
                <hr />
              </>
            );
          })}
        </div>
        <h4 className="font-semibold text-[24px] opacity-80">
          Price
        </h4>
        <p className="text-black opacity-75">
          ${price}
        </p>
        <input
          type="range"
          min="0"
          max={findMaxPrice(products)}
          step="1"
          value={price}
          class="appearance-none h-2 w-full bg-blue-500 rounded-lg outline-none"
          onChange={(event) => {
            dispatch(
              setPrice(event.target.value)
            );
          }}
        />
        <button
          onClick={() => {
            dispatch(clearFilters());
            dispatch(
              setPrice(findMaxPrice(products))
            );
          }}
          className="py-2 px-4 bg-orange-600 text-white font-normal rounded-sm"
        >
          Clear filters
        </button>
      </nav>
    </aside>
  );
};

export default ProductsSideBar;
