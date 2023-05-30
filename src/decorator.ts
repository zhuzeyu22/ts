/**
 * 将函数装饰为命令
 * @param id
 * @param dispose
 * 
 */
export function Command(id: string | symbol) {
    console.log('QWE', id);
}


export class Command2 {
    constructor(
        id: string | symbol
    ) {
        console.log('qwe', id);
    }
}

const a = <Function>Command2