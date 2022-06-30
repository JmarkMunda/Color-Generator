import React, { useEffect, useState } from "react";
import "./Color.css";

const Color = ({ rgb, hexColor, index }) => {
  const [colorAlert, setColorAlert] = useState(false);

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColorAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [colorAlert]);

  // Copy color function
  const copyHandler = () => {
    setColorAlert(true);
    const copiedText = navigator.clipboard.writeText(hexValue);
    return copiedText;
  };

  return (
    <div
      className="color-container"
      style={{ backgroundColor: `rgb(${rgb})` }}
      onClick={copyHandler}>
      <p className={`color-text ${index >= 10 && "color-light"}`}>{hexValue}</p>
      {colorAlert && (
        <p
          className={`color-alert ${
            index >= 10 ? "color-light" : "color-text"
          }`}>
          Color copied!
        </p>
      )}
    </div>
  );
};

export default Color;
