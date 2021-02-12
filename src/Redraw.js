import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { addPost, updatePostText } from "./Redux/Basis";
import { BrowserRouter } from "react-router-dom";

export let redrawPage = (basis) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App basis={basis} addPost={addPost} updatePostText={updatePostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
