import React, { Component } from "react";
import "./AddItems.css"
export default class AddItems extends Component{
    constructor(props)
    {
        super(props)
        this.itemRef=React.createRef()
        this.qtyRef=React.createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.AddNewItem({name:this.itemRef.current.value,qty:this.qtyRef.current.value})
    }
    render()
    {
      return <div className="addItem">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Name">Item Name</label><br/>
        <input type="text" placeholder="Item" ref={this.itemRef} id="Name"></input><br/>
        <label htmlFor="Quantity">Quantity</label><br/>
        <input type="text" placeholder="Quantity" ref={this.qtyRef} id="Quantity"></input><br/>
        <button>Submit</button>
      </form></div> 
    }
}