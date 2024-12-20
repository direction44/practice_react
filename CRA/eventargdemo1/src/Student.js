import { Component } from "react";

class Student extends Component{
   handleArgClick(name,roll,e){
        console.log("Name",name,"Roll",roll);
   }
    handleClick=(e)=>{
        this.handleArgClick(this.props.name,this.props.roll,e)
    }
    render(){
        return<div>
            <p>Hello {this.props.name}, your roll no is {this.props.roll} <button onClick={this.handleClick}>click me</button></p>
            
        </div>
    }
}

export default Student