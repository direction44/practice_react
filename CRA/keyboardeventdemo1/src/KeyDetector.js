import { Component } from "react";

class KeyDetector extends Component{
    constructor(props)
    {
        super(props)
        this.state={key:"",code:""}
        this.KeyDetectorEvent=this.KeyDetectorEvent.bind(this)
    }
    KeyDetectorEvent(e)
    {
        this.setState({key:e.key,code:e.code})
        // e.target.value=""
    }
    render()
    {
        return<div style={{textAlign:"center"}}>
            <h1>Key Detector</h1>
            <h2>Key: {this.state.key}, Code: {this.state.code}</h2>
            <input type="text" placeholder="type Anything" onKeyDown={this.KeyDetectorEvent}/>
        </div>
    }
}
export default KeyDetector