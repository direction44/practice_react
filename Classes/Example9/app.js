class Emp{
   constructor(n,sal)
   {
      this.name=n
      this.salary=sal
   }
   raiseSalary()
   {
      this.salary=this.salary+(this.salary*10)/100
   }
}

let emp1=new Emp("priya",25000)
console.log(emp1.name,emp1.salary);
emp1.raiseSalary()
console.log(emp1.name,emp1.salary);
