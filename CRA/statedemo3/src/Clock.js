import { Component } from "react";

class Clock extends Component{
    constructor(props)
    {
        super(props)
        this.state={currTime:new Date()}
        setInterval(this.updateClock,1000)
    }
    updateClock=()=>
    {
        this.setState({currTime:new Date()})
    }
    render()
    {
        return<div>
            <h2>
                Date And Time
            </h2>
            <h2>
            Current Date And Time Is :{this.state.currTime.toLocaleString()}
            </h2>
        </div>
    }
}
export default Clock