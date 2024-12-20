class parent{
  getAge()
  {

  }
}

class child extends parent{
  constructor()
  {
    super()
    this.getAge()
    super()
  }
  getChildAge()
  {
      document.write("Childdddddddddddddd")
  }
}

let c=new child()
c.getChildAge()
