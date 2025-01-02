import { Component } from "react";

export default class ComponentB extends Component{
    constructor(props)
    {
        super(props)
        console.log("constructor called B");
        this.state={name:"Disha"}
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
    componentDidMount()
    {
        console.log("componentDidMount B");
    }
}