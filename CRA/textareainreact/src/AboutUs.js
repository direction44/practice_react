import { Component } from "react";

class AboutUs extends Component{
    constructor(props)
    {
        super(props)
        this.state={value:"Please review us"}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e)
    {
        this.setState({value:e.target.value})
    }
    handleSubmit(e)
    {
        e.preventDefault()
        alert("Your Review is: "+this.state.value)
        this.setState({value:""})
    }
    render()
    {
        return<form onSubmit={this.handleSubmit}>
            <label htmlFor="review">Reiew Us</label><br/>
            <textarea id="review" value={this.state.value} onChange={this.handleChange}></textarea>
            <br/>
            <button>Submit</button>
        </form>
    }
}

export default AboutUs