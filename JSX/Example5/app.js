function MyApp()
{
   let arr=[1,6,3,8,22,19,45,3,8,34]
   let msg=arr[Math.floor(Math.random()*arr.length)]
   let div=<div>Your number is {msg}<br/>{(msg==6)&&<b>Congratulation You Won</b>}</div>
   return div
}

let root=document.getElementById("root")
ReactDOM.render(React.createElement(MyApp),root)