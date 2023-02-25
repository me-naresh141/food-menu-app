import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./stylesheet/index.css";

// When you are using React v 17 you can use this.
// ReactDOM.render(<App />, document.getElementById('app'))

// While using React v18 use this (You can check the react version in package.json file)
// import ReactDOM from 'react-dom/client'
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
