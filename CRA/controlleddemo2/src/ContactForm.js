import { Component } from "react";
export default class ContactForm extends Component{
    constructor(props)
    {
        super(props)
        this.state={msg:""}
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(e)
    {
        e.preventDefault()
        alert("you typed "+this.state.msg)
        this.setState({msg:""})
    }
    handleChange(e)
    {
        this.setState({msg:e.target.value})
    }
    render()
    {
        return<div>
            <h1>Contact Form</h1>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="please type" value={this.state.msg} type="text" onChange={this.handleChange}/>
                <button> Submit</button>
            </form>
        </div>
    }

}