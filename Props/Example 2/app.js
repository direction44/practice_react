function App (props)
{
return<Hello who="Disha" from/>

}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App />)
