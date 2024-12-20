class Emp{
   constructor(n,sal)
   {
      this.name=n
      this.salary=sal
   }
   raiseSalary(per)
   {
      this.salary=this.salary+(this.salary*per)/100
   }
}

let emp1=new Emp("priya",25000)
console.log(emp1.name,emp1.salary);
emp1.raiseSalary(30)
console.log(emp1.name,emp1.salary);
