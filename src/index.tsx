// React
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Global StyleSheets
import "./styles/global.sass";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/700-italic.css";
import "aos/dist/aos.css";

// Main app component
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("react-app") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
