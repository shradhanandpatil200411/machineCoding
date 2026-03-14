import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Warper from "./Warper.jsx";

createRoot(document.getElementById("root")).render(
  <Warper>
    <App />
  </Warper>,
);
