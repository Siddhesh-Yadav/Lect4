import React from "react";
import ReactDOM from "react-dom/client"
const rootElem = document.getElementById("root");


const APP = () => (
    <div>This is PERFECT!</div>
)


const root = ReactDOM.createRoot(rootElem);
root.render(<APP />);