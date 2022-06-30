import React from "react";
import "./Color.css";

const Color = ({ rgb, type, weight, hexColor, index }) => {
  const hexValue = `#${hexColor}`;

  // Copy color function
  const copyHandler = () => {
    const copiedText = navigator.clipboard.writeText(hexValue);
    return copiedText;
  };

  return (
    <div
      className="color-container"
      style={{ backgroundColor: `rgb(${rgb})` }}
      onClick={copyHandler}>
      <p className={`color-text ${index >= 10 && "color-light"}`}>{hexValue}</p>
    </div>
  );
};

export default Color;
