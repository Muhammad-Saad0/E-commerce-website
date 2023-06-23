import React, { useState } from "react";
import "./alert.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: "200%", // Start position (off-screen to the right)
  },
  animate: {
    x: 0, // Final position (original position)
    transition: {
      duration: 0.5, // Duration of the animation (reduced to 0.3 seconds)
      stiffness: 500,
      delay: 0.2, // Stiffness of the animation (added stiffness)
    },
  },
};

const Alert = ({ type, text }) => {
  const [close, setClose] = useState(false);
  return (
    <div
      className={`content ${
        close && "hidden"
      } fixed top-[80px] right-0 px-5 z-10`}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className={`alert ${
          type === "SUCCESS"
            ? "alert-success"
            : type === "ERROR"
            ? "alert-danger"
            : "alert-info"
        } alert-white rounded`}
      >
        <button
          onClick={() => {
            setClose(true);
          }}
          className="px-2 close"
          type="button"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <div className="icon">
          <i className="fa fa-check"></i>
        </div>
        <strong>
          {type === "SUCCESS"
            ? "SUCCESS!!"
            : type === "ERROR"
            ? "ERROR!!"
            : "INFO!!"}
        </strong>{" "}
        {text}
      </motion.div>
    </div>
  );
};

export default Alert;