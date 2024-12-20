class Emp
{
 a=10
 #b=50
 show()
 {
    console.log(this.a,this.#b)
 }
}

let e1=new Emp()
e1.show()