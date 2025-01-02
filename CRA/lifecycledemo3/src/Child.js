import { Component } from "react";

export default class Child extends Component
{
    constructor(props)
    {
        super(props)
        this.state={count:this.props.c_count}
        console.log("constructor called B");
    }
    static getDerivedStateFromProps(prop,state){
        console.log("state",state,prop,"prop");
        console.log("getDerivedStateFromProps B");
        return {count:prop.c_count}
    }

    render()
    {
        console.log("render B");
        return<div>
                {this.props.c_count}
        </div>
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("shouldComponentUpdate B");
        if(this.state.count!==nextState.count){
            return true
        }
        return false 
    }
    componentDidMount()
    {
        console.log("componentDidMount B");
    }
}