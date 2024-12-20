class Course extends React.Component{
    render()
    {
       let {name,Title}=this.props
       let arr=Title.map((element) => {
        return <li>{element}</li>
       });
        return <div>
                <p>Course Name: {name}</p>
                <p>Title:
                <ul>{arr}</ul>
                </p>
               </div>
    }
}