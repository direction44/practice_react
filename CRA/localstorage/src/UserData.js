import { useState } from "react"

export default function UserData(){
    const[Data,setData]=useState({name:"",id:""})
    function changeData(e){
        console.log(e.target.name,e.target.value)
        setData({...Data,[e.target.name]:e.target.value})
    }

    function saveDate()
    {
        localStorage.setItem("AllData", JSON.stringify(Data));
        setData({name:"",id:""})
    }

    function loadData() {
        let AllDataIs = JSON.parse(localStorage.getItem("AllData"));
        if (AllDataIs) {
            setData({ name: AllDataIs.name, id: AllDataIs.id });
        }
    }
    
return<>
<h1>Your Details:</h1>
<label htmlFor="name">Name:</label><br/>
<input type="text" id="name" value={Data.name} onChange={changeData} name="name" ></input><br/>
<label htmlFor="age">Age:</label><br/>
<input type="number" id="age" value={Data.id} onChange={changeData} name="id"></input><br/><br/>
<button onClick={saveDate}>Save</button>
<button onClick={loadData}>Load</button>
</>
}