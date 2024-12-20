class Emp
{
   constructor(a,b)
   {

      this.a=10
      this.#b=50//this gives error
   }
 show()
 {
    console.log(this.a,this.#b)
 }
}

let e1=new Emp()
e1.show()