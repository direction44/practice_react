import { Component } from "react";
import "./ProductItem.css"
export default class ProductItem extends Component{
 
 handleDelete()
 {
     this.props.deleteItem(this.props.item)
 }
 render()
 {
    return<li className="item">
        <span>{this.props.item}</span>
        <button onClick={this.handleDelete.bind(this)} className="Button">Click Me</button>
    </li>
 }   
}