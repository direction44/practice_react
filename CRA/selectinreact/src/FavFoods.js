import { Component } from "react";

class FavFoods extends Component{
    constructor(props)
    {
        super(props)
        this.state={value:"chinese"}
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
        alert("Your Fav Food is: "+this.state.value)
    }
    
    render()
    {
        return<form onSubmit={this.handleSubmit}>
            <label>Choose Your Fav Foods</label><br/>
            <select value={this.state.value} onChange={this.handleChange}> 
                <option value="Indian">Indian</option>
                <option value="Mughlai" selected>Mughlai</option>
                <option value="chinese">chinese</option>
                <option value="Awadhi">Awadhi</option>
            </select><br/>
            <button>Submit</button>
        </form>
    }
}

export default FavFoods