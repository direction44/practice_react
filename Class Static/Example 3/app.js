class Emp{
    
    static Company="Amazon"
    constructor(name,salary,age) {
        this.name=name
        this.salary=salary
        this.age=age
    }

    static changeCompany(cname)
    {
        this.Company=cname
    }
}

let E1=new Emp("priya",25000.0,23)
console.log("name is ",E1.name,"salary is ",E1.salary,"age is ",E1.age,"Company is ",Emp.Company)
Emp.changeCompany("Microsoft")
console.log("name is ",E1.name,"salary is ",E1.salary,"age is ",E1.age,"Company is ",Emp.Company)