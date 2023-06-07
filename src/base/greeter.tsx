import bindings from 'bindings';
const kfr = bindings('kfr')

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

function kill(person: Person) {
  person.firstName = 'qweqwe'
  return
}

let user = new Student("Jane", "M.", "User");

// document.body.textContent = greeter(user);

// kill(user);

// console.log(user)
// console.log(kfr)