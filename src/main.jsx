import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/header.css";
import "./css/navigation.css";
import "./css/errorhandler.css";
import "./css/card.css";
import "./css/cart.css";
import "./i18n";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
