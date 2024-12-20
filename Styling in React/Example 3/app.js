class App extends React.Component{
    render()
    {
        return <div>
            <h1>Course Details</h1>
            <Student name="Sidharth" age={28} subjects={["physics","chemistry","math"]} marks={[50,60,90]}/>
        </div>
         
    }
}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App />)
