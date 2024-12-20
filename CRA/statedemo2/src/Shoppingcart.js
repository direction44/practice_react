import { Component } from "react";

class Shoppingcart extends Component{
    constructor(props){
        super(props)
        this.state={items:[...this.props.items],total:this.props.items.length}
        setTimeout(this.ChangeCart, 5000);
    }
    render(){
        return<div>
               <h2>Item:{this.state.items.join()}</h2>
               <h2>total :{this.state.total}</h2>
            </div>
    }
    ChangeCart=()=>
    {
        let Newitems=[...this.state.items,"laptop"]
        let NewTotal=Newitems.length
        this.setState({items:Newitems,total:NewTotal})
    }
}
export default Shoppingcart