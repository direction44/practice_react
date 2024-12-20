import { Component } from "react";

class MyButton extends Component{
    handleClick()
    {
        let date=new Date()
        alert(date)
    }
    render(){
        return <button onClick={this.handleClick}>Click Me</button>
    }
}
export default MyButton