function add(...args)
{
    let sum=0
    args.forEach((x)=>
    {
        sum=sum+x
    })
    console.log(sum)
}

add(10,20,30)
add(10,20,30,40,50)
add(10,20,30,40,50,60,70)
add(10,20,30,40,50,60,70,80,90)