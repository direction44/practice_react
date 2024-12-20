function MyApp()
{
    let app=React.createElement("p",null,"React Rocks!")
    return app
}

let root=document.getElementById("root")
let element=React.createElement(MyApp)
ReactDOM.render(element,root)