"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = exports.CB = exports.IB = exports.a = void 0;
console.log('IB.type');
function a(serviceId) {
    const id = function (a, b, c) {
        if (arguments.length !== 3) {
            throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
        }
    };
    id.toString = () => serviceId || '';
    return id;
}
exports.a = a;
exports.IB = a('IB');
exports.CB = a('CB');
let C = class C {
    constructor(ib) {
        this.ib = ib;
        this.hehe = () => { };
        console.log('ib', ib);
    }
};
C = __decorate([
    __param(0, exports.IB)
], C);
exports.C = C;
class D {
    constructor(c) {
        this.c = c;
    }
}
const d = new D(C);
// console.log('IB.type');
console.log(d);
console.log(new d.c());
console.log(exports.IB);
console.log(exports.IB);
//# sourceMappingURL=interface.js.map