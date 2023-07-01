import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Amazing Gadgets",
    image: "/gadgets1.jpg",
  },
  {
    title: "Men Fashion",
    image: "/men-fashion.jpg",
  },
  {
    title: "Shoe Villa",
    image: "/shoes.jpg",
  },
  {
    title: "Home Decor",
    image: "/home-decor.jpg",
  },
];
const handleSlideClick = (slideNo) => {
  console.log(slideNo);
};

const Slider = () => {
  const [active, setActive] = React.useState(0);
  const [autoplay, setAutoplay] =
    React.useState(1);
  const max = slides.length;

  const intervalBetweenSlides = () =>
    autoplay &&
    setActive(
      active === max - 1 ? 0 : active + 1
    );

  React.useEffect(() => {
    const interval = setInterval(
      () => intervalBetweenSlides(),
      3000
    );
    return () => clearInterval(interval);
  });

  const nextOne = () =>
    active === max - 1
      ? setActive(0)
      : setActive((state) => state + 1);

  const prevOne = () =>
    active > 0 && setActive(active - 1);

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform:
        "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    slides.map((slide, index) => (
      <div>
        <div
          onClick={() => {
            handleSlideClick(index);
          }}
          className="each-slide relative flex flex-col justify-center items-center"
          key={index}
        >
          <img
            className="absolute w-[100vw] object-cover"
            src={slide.image}
            alt=""
          />
          <div
            className="w-1/2 relative z-10 bg-black
        rounded-[3px] h-1/3 bg-opacity-60"
          >
            <div className="relative py-8 w-full flex-col flex items-center gap-5">
              <h3 className="text-white text-4xl font-semibold">
                {slide.title}
              </h3>
              <p className="text-white text-sm font-extralight">
                upto 30% off on all on sale
                products
              </p>
              <div className="pb-1 bg-white items-center w-2/3 rounded-md opacity-70" />
              <Link
                to={"/products"}
                className="px-4 py-2 font-normal text-white bg-blue-700 items-center rounded-sm"
              >
                Shop Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));

  const renderArrows = () => (
    <React.Fragment>
      <button
        type="button"
        className="arrows prev"
        onClick={() => prevOne()}
      >
        <svg
          fill="#FFFFFF"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button
        type="button"
        className="arrows next"
        onClick={() => nextOne()}
      >
        <svg
          fill="#FFFFFF"
          height="50"
          viewBox="0 0 24 24"
          width="50"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </React.Fragment>
  );

  return (
    <section className="slider">
      <div
        className="wrapper"
        style={setSliderStyles()}
      >
        {renderSlides()}
      </div>
      {renderArrows()}
    </section>
  );
};

export default Slider;
