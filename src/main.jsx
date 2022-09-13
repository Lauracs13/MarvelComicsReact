import React from "react";
import ReactDOM from "react-dom/client";
import { MarvelApp } from "./MarvelApp";
import { AppProvider } from "./context";


import './styles.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AppProvider>
      <MarvelApp />
    </AppProvider>
     </React.StrictMode>
);
