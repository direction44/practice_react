import { Component } from "react";
import "./ProductItem.css"
class ProductItem extends Component{
    constructor(props)
    {
        super(props)
        this.handleDelete=this.handleDelete.bind(this)
    }
    handleDelete()
    {
        this.props.deleteItem(this.props.name)
    }
    render()
    {
        return<tr className="ProductItem">
        <td>{this.props.name}</td>
        <td>{this.props.qty}</td>
        <td className="btn"><button onClick={this.handleDelete} className="Button">Delete</button></td></tr>
    
    }
}

export default ProductItem