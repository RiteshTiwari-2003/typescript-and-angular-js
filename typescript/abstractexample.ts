abstract class Employee1{
    constructor(private firstName:string, private lastName:string){

    }
    abstract getSalery():number;
    get fullName():string{
        return `${this.firstName}${this.lastName}`;
    }
    getFullDetails():string{
        return `${this.fullName} got ${this.getSalery()} per month`;
    }
}
class GetEmployee extends Employee1{
    constructor(firstName:string,lastName:string,private salery:number){
        super(firstName,lastName);
    }
    getSalery():number{
        return this.salery;
    }
}
let emp3=new GetEmployee("ritesh","tiwari",600000);
console.log(emp3.getFullDetails());