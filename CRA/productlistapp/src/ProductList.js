import { Component } from "react";
import ProductItem from "./ProductItem"
import "./ProductList.css"
export default class ProductList extends Component{
    constructor(props){
        super(props)
        this.state={items:this.props.items}
        this.deleteItem=this.deleteItem.bind(this)
    }
    deleteItem(item)
    {
        let arr=this.state.items.filter((x)=>x!=item)
        console.log(arr);
        this.setState({items:arr})
    }
    render()
    {
     let myItems=this.state.items.map((x)=>{
        return<ProductItem item={x} deleteItem={this.deleteItem}/>
     })
     return<div className="ProductItem">
        <h1>Available Product</h1>
        <hr/>
        <ul>{myItems}</ul>
    </div>
    }
}