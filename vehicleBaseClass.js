class Vehicle {
    constructor(model, brand, color, year, mileage, user) {
    this.model = model
    this.brand = brand
    this.color = color
    this.year = year
    this.mileage = mileage
    this.user = user
    }
            //methods     // enter your car information to see how many miles your car has on it
    info() {            
        return "Your vehicle information: " + this.year + ", " + this.brand + ", " + this.model;
    }   

    miles() {
        if (this.mileage > 500) {
            console.log("Your car needs a oil change")
        }
        else {
            console.log("Your all good")
        }
    }  

    coupon() {
        if (this.brand === "Honda") {
            console.log("You recieve a 20% discount on your next Honda purchase")
        }
        else {
            console.log("Honda hates you forever")
        }
    }
}



let yourVehicle = new Vehicle("718 Cayman","Honda","red","2005",200,"Connor")
let vehicleInfo = yourVehicle.info();
console.log(vehicleInfo)

let vehicleMileage = yourVehicle.miles();
let vehicleCoupon = yourVehicle.coupon()

