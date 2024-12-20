function MyApp()
{
   let app=<h1>React Rocks</h1>
   return app
}

let root=document.getElementById("root")
ReactDOM.render(React.createElement(MyApp),root)