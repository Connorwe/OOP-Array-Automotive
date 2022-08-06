class Vehicle {
    constructor(model, brand, color, year, user) {
    this.model = model
    this.brand = brand
    this.color = color
    this.year = year
    this.user = user
    }
    make() {            //method
        return "My favorite vehicle is the " + this.year + ", " + this.brand + ", " + this.model;
    }                 
}



let porche = new Vehicle("718 Cayman","Porche","red","2005","Connor")
let vehicleYear = porche.make('2005');
console.log(vehicleYear)
