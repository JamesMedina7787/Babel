import Car from './car'

class Convertible extends Car{
  constructor(make, model, doors){
    super(make, model)
    this.doors = doors
  }
  getDoors(){
    return this.doors
  }
}

export default Convertible
