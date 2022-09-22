import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import  Moviecontex  from "./Contex/Moviecontex";
import ScrollToTop from "./Hoc/Scrolltotop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Moviecontex>
      <ScrollToTop />
        <App />
      </Moviecontex>
    </BrowserRouter>
  </React.StrictMode>
);
