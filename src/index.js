import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./stylesM.css";
import "./stylesDraw.css";

import Main from "./Main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);
