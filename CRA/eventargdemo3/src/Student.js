import { Component } from "react";

class Student extends Component{
    handleClick(name,roll)
    {
        console.log("Name is",name,"Roll no is:",roll);
    }
    render()
    {
        return<div>
            <p>Hello {this.props.name},your roll no is {this.props.roll} <button onClick={this.handleClick.bind(this,this.props.name,this.props.roll)}>click me</button></p>
        </div>
    }
}

export default Student