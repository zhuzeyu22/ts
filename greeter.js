var kfr = require('bindings')('kfr.node');
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function kill(person) {
    person.firstName = 'qweqwe';
    return;
}
var user = new Student("Jane", "M.", "User");
// document.body.textContent = greeter(user);
kill(user);
console.log(user);
console.log(kfr);
