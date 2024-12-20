function MyApp()
{
   let div=<div><h1>React Rocks</h1><p>React is component based library</p></div>
   return div
}

let root=document.getElementById("root")
ReactDOM.render(React.createElement(MyApp),root)