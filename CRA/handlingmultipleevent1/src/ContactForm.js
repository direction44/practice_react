import { Component } from "react";

class ContactForm extends Component{
    constructor(props){
        super(props)
        this.state={username:"",useremail:"",userpwd:""}
        this.handleChange1=this.handleChange1.bind(this)
        this.handleChange2=this.handleChange2.bind(this)
        this.handleChange3=this.handleChange3.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange1(e){
        this.setState({username:e.target.value})
    }
    handleChange2(e){
        this.setState({useremail:e.target.value})
    }
    handleChange3(e){
        this.setState({userpwd:e.target.value})

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
                <input type="text" id="uname" value={this.state.username} onChange={this.handleChange1}></input>
                <span>{this.state.username}</span><br/>
                <label htmlFor="uname">User Email</label><br/>
                <input type="email" id="email" value={this.state.useremail} onChange={this.handleChange2}></input>
                <span>{this.state.useremail}</span><br/>
                <label htmlFor="uname">User Password</label><br/>
                <input type="password" id="pwd" value={this.state.userpwd} onChange={this.handleChange3}></input>
                <span>{this.state.userpwd}</span><br/><br/>
                <button>submit</button>
            </form>
        </div>
    }
}
export default ContactForm