// can not "use strict";
msg = 'msg_foo_1';
function foo(a: any) {
    msg = 'msg_foo_2';
    console.log(this.msg, a);
}

const obj_1 = { msg: 'msg_1' };

foo.call(obj_1, 'qwe');
foo.apply(obj_1, ['qwe']);
const b = foo.bind(obj_1, 'bind');
foo('www');
b()