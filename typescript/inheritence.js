var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manu = /** @class */ (function () {
    function Manu(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Manu.prototype.getFullName = function () {
        return "".concat(this.firstName).concat(this.lastName);
    };
    return Manu;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, salery) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salery = salery;
        return _this;
    }
    Employee.prototype.getFullDetails = function () {
        return "".concat(this.getFullName(), " got ").concat(this.salery, " per month");
    };
    return Employee;
}(Manu));
var emp1 = new Employee("Ritesh", "Tiwari", 500000);
console.log(emp1.getFullDetails());
var emp2 = new Employee("pushkar", "Gupta", 65000);
console.log(emp2.getFullDetails());
