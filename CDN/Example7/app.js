function MyApp()
{
    let heading=React.createElement("h1",null,"Contact list")
    let para=React.createElement("ul",null,React.createElement("li",null,"Disha Shivhare"),React.createElement("li",null,"Aman Gupta"),React.createElement("li",null,"Praveen chturvedi"))
    let app=React.createElement("div",null,heading,para)
    return app
}

let root=document.getElementById("root")
ReactDOM.render(React.createElement(MyApp),root)