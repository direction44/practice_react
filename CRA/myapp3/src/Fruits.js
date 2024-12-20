import { Component } from "react";
import Allfoods from "./foods";
import { choice,remove } from "./helper";
class Fruits extends Component{
    render(){
        let food=choice(Allfoods)
        let remainingFoodIs=remove(Allfoods,food)
        return<div>
            <p>Total Fruits:{Allfoods.length}</p>
            <p>They Are:{Allfoods.join()}</p>
            <p>choosen Fruit is:{food}</p>
            <p>RemainingFood is:{remainingFoodIs.length}</p>
            <p>They are:{remainingFoodIs}</p>
        </div> 
    }
}

export default Fruits