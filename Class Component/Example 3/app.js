class App extends React.Component {
    render()
    {
        return<RandomNums/>
    }

}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App/>)