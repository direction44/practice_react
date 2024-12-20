import { Component } from "react";

export default class ContactForm extends Component{
    constructor(props){
        super(props)
        this.state={msg:"",submitted:false}
        this.handleKey=this.handleKey.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.value=""
    }
    handleKey(e){
        this.setState({msg:e.target.value,submitted:false})
    }
    handleSubmit(e){
        e.preventDefault()
        this.value=this.state.msg
        this.setState({msg:"",submitted:true})
    }
    render()
    {
        return<div>
            <h1>Contact Form</h1>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="type a message" onChange={this.handleKey} type="text" value={this.state.msg}/>
                <button>Submit</button>
            </form>
           {this.state.submitted&&<p>You Types: {this.value}</p>}
        </div>
    }
}