import React from "react";
import "./style.css";

function LinkBtn(props) {
  return (
    <button className="linkBtn" onClick={props.onClick}>
      <i class="fa fa-link"></i>
    </button>
  );
}

export default LinkBtn;