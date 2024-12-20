class Emp{
  constructor(name,salary)
  {
    this.name=name
    this.salary=salary
  }

  raiseSalary()
  {
    this.salary=this.salary+this.salary*0.1
  }
  toString()
  {
    return `${this.name},${this.salary}`
  }
}

class Manager extends Emp{
  constructor(name,salary,bonus)
  {
    super(name,salary)
    this.bonus=bonus
  }

  raiseIncome()
  {
    this.raiseSalary()
    this.bonus=this.bonus+this.bonus*0.1
  }

  toString()
  {
    return `${super.toString()},${this.bonus}`
  }
}

let E1=new Manager("Amit",85000,2500)
document.write(E1)
