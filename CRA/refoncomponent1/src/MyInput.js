import React, { Component } from "react";

class MyInput extends Component{
    constructor(props){
        super(props)
        this.myinp=React.createRef()
        this.giveFocus=this.giveFocus.bind(this)
    }
    giveFocus(){
        this.myinp.current.focus()
    }
    render(){
        return<input type="text" ref={this.myinp}/>
    }
}

export default MyInput