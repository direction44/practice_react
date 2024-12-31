import { Component } from "react";
import "./ProductList.css"
import ProductItem from "./ProductItem"
import AddItems from './AddItems';
class ProductList extends Component{
    constructor(props)
    {
        super(props)
        this.state={items:this.props.items}
        this.deleteItem=this.deleteItem.bind(this)
        this.AddNewItem=this.AddNewItem.bind(this)
    }
    AddNewItem(newItem){
        let allItem=this.state.items 
        let found=false
        for(let i=0;i<allItem.length;i++)
        {
            if(allItem[i].name.trim().toLowerCase()===newItem.name.trim().toLowerCase())
            {
                allItem[i].qty+=Number(newItem.qty)
                found=true
            }
        }   

        if(found)
        {
            this.setState({items:allItem})
        }
        else{
            this.setState((currState)=>{
                newItem.qty=Number(newItem.qty)
                return currState.items.push(newItem)
            })
        }
    }
    deleteItem(item)
    {
        alert("kkk")
        let brr=this.state.items.filter((x)=>x.name!==item)
        this.setState({items:brr})
    }
    render()
    {
        let arr=this.state.items.map((item)=>{
            return<ProductItem name={item.name} qty={item.qty} deleteItem={this.deleteItem}/>
        })
        return<div className="ProductList">
            <h1>Your Shopping Cart</h1>
            <hr/>
            <table><tbody>{arr}</tbody></table>
            <hr/>
            <h1>Add New Product</h1>
            <AddItems AddNewItem={this.AddNewItem}/>
        </div>
    }
}

export default ProductList