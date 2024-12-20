class Emp{
    constructor(name,lname)
    {
        this.name=name
        this.lastName=lname
    }

    get fullName(){
        return `${this.name} ${this.lastName}`
    }
}

let E1=new Emp("Disha","Shivhare")
console.log("full name is",E1.fullName)