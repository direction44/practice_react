import { Component } from "react";

export default class ComponentB extends Component{
    constructor(props)
    {
        super(props)
        console.log("constructor called B");
        this.state={name:"Aditya"}
    }
    static getDerivedStateFromProps(prop,state){
        console.log("getDerivedStateFromProps B");
        return null
    }

    render()
    {
        console.log("render B");
        return<div>
                {this.state.name}
        </div>
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("shouldComponentUpdate B");
        if(this.state.name!==nextState.name){
            return true
        }
        return false 
    }
    componentDidMount()
    {
        console.log("componentDidMount B");
    }
}