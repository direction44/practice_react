import { Component } from "react";

class KeyDetector extends Component{
  constructor(props)
  {
    super(props) 
    this.handleKeyDetector=this.handleKeyDetector.bind(this)
  }
  handleKeyDetector(e){
    if(e.code==="Enter")
    {
        window.alert("your typed "+e.target.value)
    }
    else if(e.code==="Escape")
    {
        let res=window.confirm()
        if(res)
        {
            e.target.value=""
        }
    }

  }
    render()
    {
        return<div style={{textAlign:"center"}}>
            <h1>Type Your message</h1>
            <input type="text" onKeyDown={this.handleKeyDetector} placeholder="type your message"/>
        </div> 
    }
}

export default KeyDetector