import React from "react";
import "../styles/Button.scss";

 export const OutlinedButton = (props) => {
 return <div className="outlined-button">{props.value}</div>;
};

 export const FilledButton = (props) => {
  return <div className="filled-button">{props.value}</div>;
};

