class App extends React.Component{
    render()
    {
        return <div>
            <h1>Course Details</h1>
            <Course name="JAVA" Title={["java EE","JAVA SE","Android"]}/>
            <Course name="Front-End-Dev" Title={["HTML","CSS","Java Script","React JS"]}/>
        </div>
         
    }
}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App />)
