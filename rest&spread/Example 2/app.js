function student(name,...marks)
{
    let sum=0
    marks.forEach((x)=>
    {
        sum=sum+x
    })
    console.log(name," ",sum)
}

student("Disha",10,20,30)
student("priya",10,20,30,40,50)
student("sonam",10,20,30,40,50,60,70)
student("priyanka",10,20,30,40,50,60,70,80,90)