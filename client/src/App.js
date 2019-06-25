import React from "react";
import Recipe from "./food/Recipe.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Recipe />
      <Footer />
    </div>
  );
}

export default App;