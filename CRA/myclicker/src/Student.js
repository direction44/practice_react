import { Component } from "react";

class Student extends Component{
    constructor(props){
        super(props)
        this.state={counter:1}

    }
    handleClick(step)
    {
        this.setState((state)=>{
            return {counter:state.counter+step}
        })
    }
    render()
    {
        return<div>
            <h2>Counter :{this.state.counter}</h2>
            <button onClick={this.handleClick.bind(this,1)}>click by 1</button>
            <button onClick={this.handleClick.bind(this,2)}>click by 2</button>
            <button onClick={this.handleClick.bind(this,3)}>click by 3</button>
        </div>
    }
}

export default Student