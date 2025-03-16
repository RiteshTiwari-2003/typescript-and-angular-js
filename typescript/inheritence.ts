class Manu{
    constructor(private firstName:string,private lastName:string){

    }
    getFullName():string{
        return `${this.firstName}${this.lastName}`;
    }
}
class Employee extends Manu{
    constructor(firstName:string,lastName:string,private salery:number){
        super(firstName,lastName);


    }
    getFullDetails():string{
        return `${this.getFullName()} got ${this.salery} per month`;
    }
}
const emp1=new Employee("Ritesh","Tiwari",500000);
console.log(emp1.getFullDetails());
const emp2=new Employee("pushkar","Gupta",65000);
console.log(emp2.getFullDetails());