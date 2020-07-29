import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Container from "./components/Container";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Container />, document.getElementById("root"));
registerServiceWorker();

///////////////////////////////////////////////