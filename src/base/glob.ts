import { glob } from 'glob';

export const demo = () => {

    const x = (<string[]>glob.sync('./*.ts'));

    console.log(x);
    debugger;

};
