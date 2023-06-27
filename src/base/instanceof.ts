class A {
    constructor(
        a: number = 123,
        b: number = 456
    ) {
    }
}

class B extends A {
    constructor(
        bb: number = 321,
        bbb: number = 654
    ) {
        super();
    }
}


class C extends B {
    constructor(
        cc: number = 111,
        ccc: number = 222
    ) {
        super();
    }
}

class D extends C {
    constructor(
        dd: number = 333,
        ddd: number = 444
    ) {
        super();
    }
}

let d = new D()

console.log(A.prototype.constructor.name)
console.log(B.prototype.constructor.name)
console.log(C.prototype.constructor.name)
console.log(D.prototype.constructor.name)

// D type is function
console.log(d.__proto__)
console.log(d.prototype)
console.log(Object.getPrototypeOf(d))

// C type is function
console.log(d.__proto__.__proto__)

// B type is function
console.log(d.__proto__.__proto__.__proto__)

// A type is function
console.log(d.__proto__.__proto__.__proto__.__proto__)

// Object type is function 
console.log(d.__proto__.__proto__.__proto__.__proto__.__proto__)

// null type is object
console.log(d.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__)