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

  
}

let E1=new Manager("Amit",85000)
document.write(E1)