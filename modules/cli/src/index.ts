#!/usr/bin/env node

import { Command } from 'commander';
import _package from '../package.json';
import { promisify } from 'util';
import chalk from 'chalk'; // 修改控制台中字符串的样式
import ora from 'ora';
import rsync from 'rsync';
// import figlet from 'figlet';
import clear from 'clear'; // 控制台清屏

// const figletPromise = (txt: string) => new Promise((resolve, reject) => {
//     figlet(txt, (error, result) => {
//         if (error) {
//             return reject(error);
//         }
//         resolve(result);
//     });
// });

const log = (ctx: any) => console.log(chalk.green(ctx));   // 封装日志输出

// import { sync as rm } from 'rimraf';
// var rm = require('rimraf').;
// const download = promisify(require('download-git-repo')); // 下载组件
// const clear = require('clear'); 
// async function qwe() {
//     log(await figletPromise('Hello '));
// }

const program = new Command();
program.version(_package.version);
program
    .command('cp <src> <dist>')
    .description('init extension template')
    .option("-i, --ignore <type>", "set gitignore file default ./.gitignore")
    .action(async (src, dist, options, command) => {
        console.log('src', src);
        console.log('dist', dist);
        console.log('options', options);
        // console.log('command', command);
        
        // clear();
        
        // log(await figletPromise('Hello ' + dist));
        // console.log(await figletPromise('Hello ' + dist))

        const p = ora(`⏳复制...... ${src} to ${dist}`);
        p.start();

        const r = new rsync();
        r.source(src)
            .destination(dist)
            .exclude(options.ignore || '.gitignore');

        p.succeed();
        log(`安装完成`);
    });


program.parse(process.argv);