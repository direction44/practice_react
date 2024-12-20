function App()
{
    return <div>
        <Greetings who="Disha" from="TeamSCA"/>
        <Greetings who="Disha" />
        <Greetings  from="TeamSCA"/>
        <Greetings />
    </div> 
}

let myDiv=document.querySelector("#root")
let root=ReactDOM.createRoot(myDiv)
root.render(<App/>)