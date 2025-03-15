var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 50;
    }
    Vehicle.prototype.acc = function () {
        return this.speed += 70;
    };
    Vehicle.prototype.checkSpeed = function () {
        return "The speed of the vehicle is ".concat(this.speed);
    };
    return Vehicle;
}());
var vehicleObj = new Vehicle(); //initialize object 
console.log(vehicleObj.checkSpeed()); //50
console.log(vehicleObj.acc()); //+70
console.log(vehicleObj.checkSpeed()); //120
