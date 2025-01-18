// import React from "react"; // for the React.createElement method

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />); // This is the React way of rendering the App component
// ReactDOM.createRoot(entryPoint).render(React.createElement(App)); // This is the JavaScript way of rendering the App component
