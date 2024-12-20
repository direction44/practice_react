class Emp{

  constructor(name,salary)
  {
    this.name=name
    this.salary=salary
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
  toString()
  {
    return `${super.toString()},${this.bonus}`
  }
}

let E1=new Manager("Amit",85000,2500)
document.write(E1)
