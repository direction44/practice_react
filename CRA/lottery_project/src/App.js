import { Component } from "react";
import Lottery from "./Lottery";
class App extends Component{
  render()
  {
    // return<Lottery/>}
    return<Lottery title="Lotto mini" maxValue={25} numBalls={5}/>
    // return<Lottery/>
  }
}

export default App