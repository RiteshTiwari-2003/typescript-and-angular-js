class Person{
    fullName:string;
    constructor(private firstName:string,private lastname:string){
        this.fullName = `${this.firstName}${this.lastname}`

    }
    getName():string{
        return this.fullName;
    }
    setName(newName:string):string{
        return this.fullName=newName;

    }
}
const onj=new Person("ritesh","tiwari");
console.log(onj.getName());
onj.setName("Anurag singh");
console.log(onj.getName());