import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"


const appEL = ReactDOM.createRoot(document.getElementById('app'))
appEL.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)