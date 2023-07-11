import React from "react";

const InfHSlider = ({ images }) => {
  return (
    <ul className="flex overflow-x-auto snap-x">
      {images.map((el, key) => (
        <li key={key} className="snap-start min-w-[80vw] md:min-w-[24rem]">
          <img
            src={el}
            className="aspect-[2/3] object-cover w-[80vw] md:w-96"
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default InfHSlider;
