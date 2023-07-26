import { glob } from 'glob';

export const demo = () => {

    const x = (<string[]>glob.sync('*.json'));

    console.log(x);
    debugger;

};


demo()