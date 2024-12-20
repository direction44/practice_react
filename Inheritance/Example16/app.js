class circle{
  constructor(radius)
  {
    this.radius=radius
  }
  getArea()
  {
    return Math.PI*Math.pow(this.radius,2)
  }
}

class cylinder extends circle{
  constructor(radius,height)
  {
    super(radius)
    this.height=height
  }
  getArea()
  {
    return 2*(super.getArea()+Math.PI*this.radius*this.height)
  }

  getVolume()
  {
    return super.getArea()*this.height
  }
}

let cy=new cylinder(20,10)
document.write(`Area is ${cy.getArea()}<br>`)
document.write(`Volume is ${cy.getVolume()}`)