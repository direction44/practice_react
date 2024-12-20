import reactDOM from"react-dom/client"
import App from "./App"
let myDiv=document.querySelector("#root")
let root=reactDOM.createRoot(myDiv)
root.render(<App/>)