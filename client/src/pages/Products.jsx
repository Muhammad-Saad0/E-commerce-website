/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useState,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductsSideBar from "../components/ProductsSideBar";
import sortByConstants from "../constants/sortBy";
import { setSortBy } from "../redux/actions/filterActions";

const ProductsPage = () => {
  const [searchText, setSearchText] =
    useState("");
  const dispatch = useDispatch();
  const sortBy = useSelector(
    (state) => state.filter.sortBy
  );
  const category = useSelector(
    (state) => state.filter.category
  );
  const price = useSelector(
    (state) => state.filter.price
  );
  const productsFromStore = useSelector(
    (state) => state.products.products
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect 1");
    setProducts(productsFromStore);
  }, [productsFromStore]);

  const filterProducts = (
    products,
    searchText
  ) => {
    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  };

  const filterWithPrice = (
    products,
    maxPrice
  ) => {
    const filteredProducts = products.filter(
      (product) => product.price <= maxPrice
    );
    return filteredProducts;
  };

  const sortProducts = () => {
    let array = [];
    if (sortBy === "Highest Price") {
      array = [...products].sort(
        (a, b) => b.price - a.price
      );
    } else if (sortBy === "Lowest Price") {
      array = [...products].sort(
        (a, b) => a.price - b.price
      );
    } else {
      array = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    return array;
  };

  return (
    <section className="mt-[70px] p-10 flex flex-row px-30 gap-5">
      <ProductsSideBar />
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row justify-between items-center">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              type="search"
              id="default-search"
              class="block px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-full"
              placeholder="Search by Name"
              required
            />
          </div>
          <div class="relative mr-10">
            <select
              value={sortBy}
              onChange={(event) => {
                dispatch(
                  setSortBy(event.target.value)
                );
              }}
              class="block appearance-none w-full py-2 px-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option disabled selected>
                Sort By
              </option>
              {sortByConstants.map((obj) => {
                return <option>{obj}</option>;
              })}
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                class="h-4 w-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12l-6-6 1.5-1.5L10 9.8l4.5-4.3L16 6z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {category !== "All"
            ? filterProducts(
                filterWithPrice(
                  sortProducts(products),
                  price
                ),
                searchText
              ).map((product) => {
                return (
                  product.category ===
                    category && (
                    <ProductCard
                      product={product}
                    />
                  )
                );
              })
            : filterProducts(
                filterWithPrice(
                  sortProducts(products),
                  price
                ),
                searchText
              ).map((product) => {
                return (
                  <ProductCard
                    product={product}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
