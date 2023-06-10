import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Filter } from "./components/Filter";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Filter />
        <Home />
        <Cart />
      </div>
    </ProductProvider>
  );
}

export default App;
