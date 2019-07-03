
import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button className="delete-btn" {...props}>
      <i class="fa fa-trash"></i>
    </button>
  );
}

export default DeleteBtn;