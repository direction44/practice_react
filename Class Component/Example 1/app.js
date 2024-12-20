class App extends React.Component {
    render()
    {
        return<h1> Hello Userjee</h1>
    }

}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App/>)