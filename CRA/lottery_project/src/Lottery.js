import { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";
class Lottery extends Component{
    static defaultProps={title:"Lotto",numBalls:6,maxValue:50}
    constructor(props){
        super(props)
        this.state={num:Array.from({length:this.props.numBalls})}
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        let brr=[]
        for(let i=0;i<this.props.numBalls;i++)
        {
            brr.push((Math.floor(Math.random()*this.props.maxValue)+1))
        }
        this.setState({num:brr})
    }
    render(){
        let arr=this.state.num.map((x)=>{
            return <Ball value={x}/>
        })
        return<div className="lottery">
                    <h1>{this.props.title}</h1>
                    <div>{arr}</div>
                    <button onClick={this.handleClick}>Generate Number</button>
        </div>
    }
}

export default Lottery