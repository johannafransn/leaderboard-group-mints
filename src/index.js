import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./custom.scss";
import App from "./App";
import dotenv from "dotenv";
dotenv.config();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
