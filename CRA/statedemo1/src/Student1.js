import { Component } from "react";
class Student1 extends Component{
    state={name:"Amit",roll:101}
    render(){
        return<div>
            <h2>Name is:{this.state.name}</h2>
            <h2>Name is:{this.state.roll}</h2>
        </div>
        
    }
}

export default Student1