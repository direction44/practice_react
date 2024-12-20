import React,{ Component } from "react";

class ContactForm extends Component{
    constructor(props){
        super(props)
        this.userName=React.createRef()
        this.userEmail=React.createRef()
        this.userPWD=React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e)
    {
        e.preventDefault()
        alert("User Name :"+this.userName.current.value+"\nUser Email :"+this.userEmail.current.value+"\nUser Password :",+this.userPWD.current.value)   
        this.userName.current.value=""
        this.userEmail.current.value=""
        this.userPWD.current.value=""
        this.userName.current.focus()
    }
    render()
    {
        return<div>
            <h1>Contact Form</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="Uname">User Name</label><br/>
                <input type="text" id="Uname" ref={this.userName}></input><br/>
                <label htmlFor="UEmail">User Email </label><br/>
                <input type="email" id="UEmail" ref={this.userEmail}></input><br/>
                <label htmlFor="UPWD">User Password</label><br/>
                <input type="password" id="UPWD" ref={this.userPWD}></input><br/><br/>
                <button>Submit</button>
            </form>
        </div>
    }
}

export default ContactForm