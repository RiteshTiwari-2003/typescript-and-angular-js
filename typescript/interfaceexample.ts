interface Person2{
    id?:number;
    name:string;
    age:number;
    details():string;
    
}
class Employee4 implements Person2{
    name:string;
    age:number;
    constructor( name:string, age:number){
        this.name=name;
        this.age=age;
    }
    details():string{
        return `${this.name} is ${this.age} years old.`;
    }

}
const emp=new Employee4("anuj",45);
console.log(emp.details());