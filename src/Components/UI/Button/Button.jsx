import React from "react";
import ButtonStyle from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={ButtonStyle.button}
      onClick={props.onClick}
      type={"submit" || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
