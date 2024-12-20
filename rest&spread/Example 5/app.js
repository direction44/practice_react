function student(name,...marks)
{
    let sum=0
    marks.forEach((x)=>{
        sum+=x
    })
    
    console.log(name," ",sum)
}
let arr=[10,20,30]
student("Disha",...arr)

arr=[10,20,30,40,50]
student("priya",...arr)

arr=[10,20,30,40,50,60,70]
student("sonam",...arr)

arr=[10,20,30,40,50,60,70,80,90]
student("priyanka",...arr)
