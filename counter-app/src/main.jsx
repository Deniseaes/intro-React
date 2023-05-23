import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Saludo from "./Saludo";
import ContadorApp from "./ContadorApp";

const name = "Denise Aeschbacher :p";
const num = 123;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Saludo nombre={name} />
    <ContadorApp valueInicial={num} />
  </React.StrictMode>
);
