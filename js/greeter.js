"use strict";
const kfr = require('bindings')('kfr.node');
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
kill(user);
console.log(user);
console.log(kfr);
//# sourceMappingURL=greeter.js.map