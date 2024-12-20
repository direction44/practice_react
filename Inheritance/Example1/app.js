class parent{
    getAge()
    {
        document.write("parentttttttt<br>")
    }
}

class child extends parent{
    getChildAge()
    {
        document.write("Childdddddddddddddd")
    }
}

let c=new child()
c.getAge()
c.getChildAge()