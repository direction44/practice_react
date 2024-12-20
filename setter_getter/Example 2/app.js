class Emp{
    constructor(name,lname)
    {
        this.name=name
        this.lastName=lname
    }

    get fullName(){
        return `${this.name} ${this.lastName}`
    }

    set anotherName(nameIs)
    {
        let arr=nameIs.split(" ")
        this.name=arr[0]
        this.lastName=arr[1]
    }
}

let E1=new Emp("Disha","Shivhare")
console.log("full name is",E1.fullName)
E1.anotherName="Shivangi Singh"
console.log("full name is",E1.fullName)

