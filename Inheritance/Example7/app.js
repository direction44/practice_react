class parent{
  constructor()
  {

  }
  getAge()
  {

  }
}

class child extends parent{
  constructor()
  {
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
