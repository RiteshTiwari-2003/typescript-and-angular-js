interface User{
    id:number;
    name:string;
    email:string;
}
interface Product{
    id:number;
    pname:string;
    price:number;

}
class Service<T>{
    private data:T[]=[];
    create(item:T):void{
        this.data.push(item);
    }
    getAll():T[]{
        return this.data;
    }
    update(index:number, updateData:T):void{
        this.data[index]=updateData;
    }
    delete(index:number):void{
        this.data.splice(index,1);
    }
}
const userService=new Service<User>();
userService.create({id:1,name:"ritesh",email:"abc@gmsil.com"});
userService.create({id:2,name:"anuj",email:"abcs@gmail.com"});
console.log(userService.getAll());
const prodService=new Service<Product>();
prodService.create({id:1,pname:"ritesh",price:9999});
prodService.create({id:2,pname:"anuj",price:99999});
console.log(prodService.getAll());
