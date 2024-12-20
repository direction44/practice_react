class App extends React.Component{
    render()
    {
        return <Hello who="Disha" from="Everyone"/>
    }
}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App />)
