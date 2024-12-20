import { Component } from "react";

class ContactForm extends Component{
    constructor(props){
        super(props)
        this.state={username:"",useremail:"",userpwd:""}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
   
    handleSubmit(e){
        alert("You typed\n User name: "+this.state.username+"\nUser email: "+this.state.useremail+"\nUser Password: "+this.state.userpwd)
        this.setState({username:"",useremail:"",userpwd:""})
    }
    render(){
        return<div>
            <h1>Contact Form</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="uname">User Name</label><br/>
                <input name="username" type="text" id="uname" value={this.state.username} onChange={this.handleChange}></input>
                <span>{this.state.username}</span><br/>
                <label htmlFor="uname">User Email</label><br/>
                <input name="useremail" type="email" id="email" value={this.state.useremail} onChange={this.handleChange}></input>
                <span>{this.state.useremail}</span><br/>
                <label htmlFor="uname">User Password</label><br/>
                <input name="userpwd" type="password" id="pwd" value={this.state.userpwd} onChange={this.handleChange}></input>
                <span>{this.state.userpwd}</span><br/><br/>
                <button>submit</button>
            </form>
        </div>
    }
}
export default ContactForm