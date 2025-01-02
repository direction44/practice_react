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
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate B");
        return false
    }
    render()
    {
        console.log("render B");
        return<div>
                {this.state.name}
        </div>
    }
    componentDidMount()
    {
        console.log("componentDidMount B");
    }

    getSnapshotBeforeUpdate(prevProp,prevState)
    {
        console.log("getSnapshotBeforeUpdate B");
        return null
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log("componentDidUpdate B");
    }
}