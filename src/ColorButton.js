import { useState } from "react";
import "./ColorButton.css";

const ColorButton = (props) => {
  const changeBgColor = () => {
    document.body.style.backgroundColor = props.bgcolorName;
  };

  return (
    <button
      style={{ backgroundColor: props.bgcolorName, color: props.color }}
      className="colorBtn"
      onClick={changeBgColor}
    >
      {props.bgcolorName}
    </button>
  );
};

export default ColorButton;
