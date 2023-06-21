import React, {
  useContext,
  useEffect,
} from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import styles from "../styles/styles";
import { activePageContext } from "../contexts/activePageContext/activePageContext";

const Navbar = () => {
  const { activePage, setActivePage } =
    useContext(activePageContext);
  useEffect(() => {
    console.log(activePage);
  }, []);
  return (
    <nav className="flex px-20 flex-row h-[70px] bg-primary justify-between items-center">
      <div>
        <h1 className="text-white text-[28px]">
          e
          <span className="text-orange-500">
            Shop
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-2">
        <h4
          onClick={() => {
            console.log("CLICK HAPPENED");
            setActivePage("HOME");
          }}
          className={`${
            activePage === "HOME"
              ? styles.activePage
              : styles.minorHeading
          }`}
        >
          Home
        </h4>
        <h4
          onClick={() => {
            console.log("CLICK HAPPENED");
            setActivePage("CONTACT_US");
          }}
          className={` ${
            activePage === "CONTACT_US"
              ? styles.activePage
              : styles.minorHeading
          }`}
        >
          Contact Us
        </h4>
      </div>
      <div className="flex flex-row gap-2">
        <h4
          onClick={() => {
            console.log("CLICK HAPPENED");
            setActivePage("LOGIN");
          }}
          className={`${
            activePage === "LOGIN"
              ? styles.activePage
              : styles.minorHeading
          }`}
        >
          Login
        </h4>
        <div className="flex flex-row gap-1">
          <h4
            className={`text-white ${styles.minorHeading}`}
          >
            Cart
          </h4>
          <ShoppingCartIcon className="w-5 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
