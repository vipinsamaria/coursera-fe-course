import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      <div className="button_main" onClick={() => Link}>
        <Link className="button_title" to={props.link}>
          {props.title}
        </Link>
      </div>
    </>
  );
};

export default Button;