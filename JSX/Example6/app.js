function MyApp()
{
   let arr=[1,6,3,8,22,19,45,3,8,34]
   let msg=arr[Math.floor(Math.random()*arr.length)]
   let res=null
   switch(msg%2==0)
   {
      case true:res=<b>even</b>
      break;
      case false:res=<b>odd</b>
      break;
   }

   let div=<div>Your number is {msg}<br/> and it is {res} number</div>
   return div
}

let root=document.getElementById("root")
ReactDOM.render(React.createElement(MyApp),root)