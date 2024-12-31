import { Component } from "react";
import ProductList from "./ProductList" 

class App extends Component{
  render()
  {
    return<ProductList items={[{name:"JBL Earphones",qty:1},{name:"PoleStar Backpack",qty:4},{name:"One Plus Nord 2",qty:2},{name:"Apple Iphone-13",qty:5},{name:"Cannon DSLR",qty:6}]}/>
  }
}

export default App