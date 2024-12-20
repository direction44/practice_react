import { Component } from "react";

class Counter extends Component{
    constructor(props)
    {
        super(props)
        this.state={count:0}
    }
    handleClick=()=>{
        this.setState((counter)=>{
        return counter={count:counter.count+1}
      })  
    }
    // handleTripleClick=()=>{
    //       this.setState((counter)=>{
    //       return counter={count:counter.count+3}
    //     })  
    //   }
    //  OR
    
    handleTripleClick=()=>{
          this.setState((counter)=>{
          return {count:counter.count+1}
        })  
          this.setState((counter)=>{
          return {count:counter.count+1}
        })  
          this.setState((counter)=>{
          return {count:counter.count+1}
        })  
      }
    render()
    {
        return<div>
            <h1>Counter :{this.state.count}</h1>
            <button onClick={this.handleClick}>Increment By one</button>
            <button onClick={this.handleTripleClick}>Increment By thee</button>
        </div>
    }
}

export default Counter