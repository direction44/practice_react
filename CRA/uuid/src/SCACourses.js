import React, { Component } from "react";
import { v4 } from "uuid";

export default class SCACourses extends Component{
  constructor(props){
    super(props)
    this.state={courses:[
        {name:"JAVA Script",id:v4()},
        {name:"HTML",id:v4()},
        {name:"CSS",id:v4()},
        {name:"REACT",id:v4()},
        {name:"C-language",id:v4()},
        {name:"C++",id:v4()}]}
  }

  render()
  {
    return<>
    <h2>React Courses</h2>
    <p>
      {this.state.courses.map((course)=>{
       return <React.Fragment key={course.id}>
        <p>{course.name}</p>
        </React.Fragment>
      })}
    </p>
    </>
  }
}