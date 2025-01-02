import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component{
    constructor(props)
    {
        super(props)
        console.log("constructor called A");
        this.state={count:0}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(event)
    {
        event.stopPropagation()
        this.setState((currstate)=>{
            return ({count:currstate.count+1})
        })
    }
    static getDerivedStateFromProps(prop,state){
        console.log("getDerivedStateFromProps A");
        return null
    }

    render()
    {
        console.log("render A");
        return<div>
                <Child c_count={this.state.count}/>
                <div>
                    <button onClick={this.handleClick}>Click</button>
                </div>
        </div>
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("shouldComponentUpdate A");
        if(this.state.count!==nextState.count){
            return true
        }
        return false
    }
    componentDidMount()
    {
        console.log("componentDidMount A");
    }
}