function calculate(num1,num2,...add)
{
   let sum=0;
   add.forEach((x)=>{
    sum+=x
   })

   return[num1*num2,sum]
}
let res=calculate(10,22,...[56,80,60,65,34,77])
console.log(`Product is ${res[0]} add is ${res[1]} `)
