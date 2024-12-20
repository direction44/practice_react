class App extends React.Component{
    render()
    {
        return <div>
            <h1>Student Details</h1>
            <Hello name="Disha" age={27} subjects={["physics","chemistry","math"]} marks={[50,45,80]} isPass={true} address={{city:"JaswantNagar",pincode:206245}}/>
        </div>
         
    }
}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App />)
