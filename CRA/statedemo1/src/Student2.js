import { Component } from "react";
class Student2 extends Component{
    constructor(props)
    {
        super(props)
        this.state={name:"Rakesh",roll:102}
    }
    render(){
        return<div>
            <h2>Name is:{this.state.name}</h2>
            <h2>Name is:{this.state.roll}</h2>
        </div>
        
    }
}

export default Student2