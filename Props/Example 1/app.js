function App (props)
{
    return <h1>Hello{props.who} </h1>
}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App who="Disha"/>)
