var Service = /** @class */ (function () {
    function Service() {
        this.data = [];
    }
    Service.prototype.create = function (item) {
        this.data.push(item);
    };
    Service.prototype.getAll = function () {
        return this.data;
    };
    Service.prototype.update = function (index, updateData) {
        this.data[index] = updateData;
    };
    Service.prototype.delete = function (index) {
        this.data.splice(index, 1);
    };
    return Service;
}());
var userService = new Service();
userService.create({ id: 1, name: "ritesh", email: "abc@gmsil.com" });
userService.create({ id: 2, name: "anuj", email: "abcs@gmail.com" });
console.log(userService.getAll());
var prodService = new Service();
prodService.create({ id: 1, pname: "ritesh", price: 9999 });
prodService.create({ id: 2, pname: "anuj", price: 99999 });
console.log(prodService.getAll());
