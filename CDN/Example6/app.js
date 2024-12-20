function MyApp()
{
    let heading=React.createElement("h1",null,"React Rocks!")
    let para=React.createElement("p",null,"react is component based library")
    let app=React.createElement("div",null,heading,para)
    return app
}

let root=document.getElementById("root")
ReactDOM.render(React.createElement(MyApp),root)