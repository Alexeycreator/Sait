import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { redrawPage } from "./Redraw";
import basis from "./Redux/Basis";

redrawPage(basis);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
