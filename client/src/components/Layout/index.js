import React from "react";
import "./style.css";

//List and ListItem components
export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}


//Bootstrap components
export function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 60, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}


export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Shortcut for boostrap classname e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}


