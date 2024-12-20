class Emp
{
   #b
   constructor(a,b)
   {

      this.a=10
      this.#b=50
   }
 show()
 {
    console.log(this.a,this.#b)
 }
}

let e1=new Emp()
e1.show()