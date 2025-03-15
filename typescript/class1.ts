class Car{
    speed:number;
    constructor(){
        this.speed=50;
    }
    acc():number{
        return this.speed+=70;
    }
    checkSpeed():string{
        return `The speed of the car is ${this.speed}`
    }


}
const object=new Car();//initialize object 