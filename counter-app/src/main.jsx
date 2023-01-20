import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Saludo from "./Saludo";

const name = "Denise Aeschbacher =)";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Saludo nombre={name} />
  </React.StrictMode>
);
