import { Component } from "react";

class Counter extends Component{
    constructor(props)
    {
        super(props)
        this.state={count:0}
    }
    handleClick=()=>{
        this.setState({count:this.state.count+1})
    }
    handleTripleClick=()=>{
        this.setState({count:this.state.count+1})
        this.setState({count:this.state.count+5})
        this.setState({count:this.state.count+3})
    }
    render(){
        return<div>
            <h2>Counter :{this.state.count}</h2>
            <button onClick={this.handleClick}>increment by one</button>
            <button onClick={this.handleTripleClick}>increment by three</button>
        </div>
    }
}

export default Counter