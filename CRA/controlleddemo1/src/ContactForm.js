import { Component } from "react";

class ContactForm extends Component{
    constructor(props)
    {
        super(props)
        this.handleKey=this.handleKey.bind(this)
        this.state={msg:""}
    }
    handleKey(e){
        this.setState({msg:e.target.value})
    }
    render()
    {
        return<div>
            <h1>Contact Form</h1>
            <form>
                <label htmlFor="uname"></label>
            <input id="uname" placeholder="Type a messege" type="text" value={this.state.msg} onChange={this.handleKey}/>
            
            </form>
            <p>You typed :{this.state.msg}</p>
        </div>
    }
}

export default ContactForm