import { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component{
    constructor(props)
    {
        super(props)
        console.log("constructor called A");
        this.state={name:"Disha"}
    }
    static getDerivedStateFromProps(prop,state){
        console.log("getDerivedStateFromProps A");
        return null
    }
    render()
    {
        console.log("render A");
        return<div>
                {this.state.name}
                <ComponentB/>
        </div>
    }
    componentDidMount()
    {
        console.log("componentDidMount A");
    }
}