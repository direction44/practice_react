import { Component } from "react";
import ProductList from "./ProductList";

class App extends Component{
  render()
  {
    return<ProductList items={["JBL Earphones","PoleStar Backpack","One Plus Nord 2","Apple Iphone-13","Cannon DSLR","Dettol N-95 Mask"]}/>
  }
}

export default App