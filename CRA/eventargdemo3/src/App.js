import { Component } from "react";
import Student from "./Student";
class App extends Component{
  render()
  {
    return<div>
      <Student name="Rahul" roll={101}/>
      <Student name="Nakul" roll={102}/>
    </div>
  }
}

export default App