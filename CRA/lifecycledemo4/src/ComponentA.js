import { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component{
    constructor(props)
    {
        super(props)
        console.log("constructor called A");
        this.state={name:"Disha"}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(event)
    {
        event.stopPropagation()
        this.setState({name:"Disha Shivhare"})
    }
    static getDerivedStateFromProps(prop,state){
        console.log("getDerivedStateFromProps A");
        return null
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate A");
        if(this.state.name!==nextState.name){
            return true
        }
        return false
    }
    render()
    {
        console.log("render A");
        return<div>
                {this.state.name}
                <ComponentB/>
                <div>
                    <button onClick={this.handleClick}>Click</button>
                </div>
        </div>
    }
    componentDidMount()
    {
        console.log("componentDidMount A");
    }
    getSnapshotBeforeUpdate(prevProp,prevState)
    {
        console.log("getSnapshotBeforeUpdate A");
        return null
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log("componentDidUpdate A");
    }
}