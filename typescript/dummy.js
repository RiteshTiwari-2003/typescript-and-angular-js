var Person = /** @class */ (function () {
    function Person(firstName, lastname) {
        this.firstName = firstName;
        this.lastname = lastname;
        this.fullName = "".concat(this.firstName).concat(this.lastname);
    }
    Person.prototype.getName = function () {
        return this.fullName;
    };
    Person.prototype.setName = function (newName) {
        return this.fullName = newName;
    };
    return Person;
}());
var onj = new Person("ritesh", "tiwari");
console.log(onj.getName());
onj.setName("Anurag singh");
console.log(onj.getName());
