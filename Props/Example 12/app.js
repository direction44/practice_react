class App extends React.Component{
    render()
    {
        return <div>
            <h1>Emoji Picker</h1>
            <Emoji e1="😊" e2="🤣" e3="😁"/>
            <Emoji e1="😊" e2="😊" e3="😊"/>
            <Emoji e1="👍" e2="👌" e3="😘"/>
        </div>
         
    }
}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App />)
