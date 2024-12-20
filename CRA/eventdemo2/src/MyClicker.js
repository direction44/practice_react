import { Component } from "react";

class MyClicker extends Component{
    constructor(props){
        super(props)
        this.state={counter:1}
    }
    handleClick=()=>{
        this.setState({counter:this.state.counter+1})
    }
    render(){
        return(
            <div>
                <h1>Counter Is:{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button></div>)
    }
}

export default MyClicker