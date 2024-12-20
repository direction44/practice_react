import { Component } from "react";
import Shoppingcart from "./Shoppingcart"
class App extends Component{
  render(){
    return<Shoppingcart items={["mobile","tablet"]}/>
  }
}

export default App