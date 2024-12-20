class parent{
  constructor()
  {
    document.write("********************************************<br>")
  }
}

class child extends parent{
    getChildAge()
    {
        document.write("Childdddddddddddddd")
    }
}

let c=new child()
c.getChildAge()