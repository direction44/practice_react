import { Component } from "react";
import Student from "./Student";
class App extends Component{
  render()
  {
    return <div>
      <Student name="Amit" roll={101}/>
      <Student name="Rohan" roll={102}/>
    </div>
  }
}

export default App