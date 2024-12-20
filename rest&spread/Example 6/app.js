function student(name,...marks)
{
    let sum=0
    console.log(marks,marks.length);
    marks[0].forEach((x)=>{
        sum+=x
    })
    
    console.log(name," ",sum)
}
let arr=[10,20,30]
student("Disha",arr)

