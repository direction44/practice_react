function MyApp()
{
   let div=<div><h1>Contact list</h1><ul><li>Disha Shivhare</li><li>Aditya Shakya</li><li>Anubhav Shivhare</li></ul></div>
   return div
}

let root=document.getElementById("root")
ReactDOM.render(React.createElement(MyApp),root)