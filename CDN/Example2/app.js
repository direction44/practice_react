function MyApp()
{
    let app=React.createElement("p",null,"React Rocks!")
    return app
}

let root=document.getElementById("root")
ReactDOM.render(MyApp(),root)