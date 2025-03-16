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
var Employee1 = /** @class */ (function () {
    function Employee1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee1.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName).concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee1.prototype.getFullDetails = function () {
        return "".concat(this.fullName, " got ").concat(this.getSalery(), " per month");
    };
    return Employee1;
}());
var GetEmployee = /** @class */ (function (_super) {
    __extends(GetEmployee, _super);
    function GetEmployee(firstName, lastName, salery) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salery = salery;
        return _this;
    }
    GetEmployee.prototype.getSalery = function () {
        return this.salery;
    };
    return GetEmployee;
}(Employee1));
var emp3 = new GetEmployee("ritesh", "tiwari", 600000);
console.log(emp3.getFullDetails());
