"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bindings_1 = __importDefault(require("bindings"));
const kfr = (0, bindings_1.default)('kfr');
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function kill(person) {
    person.firstName = 'qweqwe';
    return;
}
let user = new Student("Jane", "M.", "User");
// document.body.textContent = greeter(user);
// kill(user);
// console.log(user)
// console.log(kfr)
//# sourceMappingURL=greeter.js.map