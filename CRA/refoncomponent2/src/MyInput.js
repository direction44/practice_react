import React, { Component } from "react";

class MyInput extends Component{
    constructor(props){
        super(props)
        this.myinp=React.createRef()
        this.getSelected=this.getSelected.bind(this)
        this.isEmpty=this.isEmpty.bind(this)
    }
    getSelected(){
        this.myinp.current.select()
    }
    isEmpty(){
        console.log(this.myinp.current.value==="");
        return this.myinp.current.value===""
    }
    render(){
        return<input type="text" ref={this.myinp}/>
    }
}

export default MyInput