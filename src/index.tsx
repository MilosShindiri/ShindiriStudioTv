import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setupSpatialNavigation } from "./utils/config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

setupSpatialNavigation();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
