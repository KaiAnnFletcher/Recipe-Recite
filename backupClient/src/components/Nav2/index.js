import React from "react";
import "./style.css";

function Nav() {
  return (
<div class="topnav">
<span><h3>FOOD RECIPE APP</h3></span>
  <div class="login-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Username" name="username"></input>
      <input type="text" placeholder="Password" name="psw"></input>
      <button type="submit">Login</button>
    </form>
  </div>
</div>
  );
}

export default Nav;
