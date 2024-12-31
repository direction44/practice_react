import ReactDOM from "react-dom/client";
import App from "./App"

let div=document.querySelector("#root")
let root=ReactDOM.createRoot(div)
root.render(<App/>)