class Student extends React.Component{
    render()
    {
        let studentStyle={backgroundColor:"limegreen",border:"solid 3px green",borderRadius:"5px",fontFamily:"'Yuji Mai',serif"}
       let {name,age,subjects,marks}=this.props
       let total=0
        return <div style={studentStyle}>
                <p>Course Name: {name}</p>
                <p>Age:{age}</p>
                <p>Subjects:
                <ul>{subjects.map((subj) => {
                    return <li>{subj}</li>
                })}</ul>
                </p>
                <p>Marks:
                <ul>{marks.map((mark) => {
                    total+=mark
                    return <li>{mark}</li>
                })}</ul>
                </p>
                <p>Total is: {total}</p>
                <p>{(total>=155)?<b>Pass</b>:<b>Fail</b>}</p>
               </div>
    }
}