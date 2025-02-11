import React, { Component } from "react";

export default class SCACourses extends Component{
  constructor(props){
    super(props)
    this.state={courses:["JAVA Script","HTML","CSS","REACT","C-language","C++"]}
  }

  render()
  {
    return<>
    <h2>React Courses</h2>
    <p>
      {this.state.courses.map((course,index)=>{
       return <React.Fragment key={index}>
        <p>{course}</p>
        </React.Fragment>
      })}
    </p>
    </>
  }
}