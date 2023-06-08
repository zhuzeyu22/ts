// 箭头函数

export const arrow = (a: any, b: any) =>
    (c: any, d: any) => {
        console.log('arrow', a, b, c, d);
        return {
            a, b, c, d
        };
    };



console.log(arrow(1, 2)(3, 4));