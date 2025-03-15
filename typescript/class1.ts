class Vehicle{
    speed:number;
    constructor(){
        this.speed=50;
    }
    acc():number{
        return this.speed+=70;
    }
    checkSpeed():string{
        return `The speed of the vehicle is ${this.speed}`
    }


}
const vehicleObj = new Vehicle();//initialize object 
console.log(vehicleObj.checkSpeed());//50
console.log(vehicleObj.acc());//+70
console.log(vehicleObj.checkSpeed());//120