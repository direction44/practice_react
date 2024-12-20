import React,{ Component } from "react";
import MyInput from "./MyInput"
export default class MyComponent extends Component{
    constructor(props)
    {
        super(props)
        this.inpref=React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
handleSubmit()
{
this.inpref.current.giveFocus()
}
    render(){
        return<div>
            <MyInput ref={this.inpref}/><br/>
            <button onClick={this.handleSubmit}>submit</button>
        </div>
    }

}