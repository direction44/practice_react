class Course extends React.Component{
    render()
    {
       let {name,Title}=this.props
        return <div>
                <p>Course Name: {name}</p>
                <p>Title:
                <ul>{Title.map((element) => {
                    return <li>{element}</li>
                })}</ul>
                </p>
               </div>
    }
}