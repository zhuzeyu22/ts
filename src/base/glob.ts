import { glob, globSync, globStream, globStreamSync, Glob } from 'glob';

export const demo = () => {

    const x = (<string[]>glob.sync('./*.ts'));

    console.log(x);
    debugger;
    
};
