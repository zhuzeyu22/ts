#!/usr/bin/env node
import { Command } from 'commander';
import _package from '../package.json';
import { promisify } from 'util';
import chalk from 'chalk'; // 修改控制台中字符串的样式
import ora from 'ora';

var downloadUrl = require('download');
var gitclone = require('git-clone');
var rm = require('rimraf').sync;

const figlet = promisify(require('figlet'));
// const download = promisify(require('download-git-repo')); // 下载组件

const clear = require('clear'); // 控制台清屏
const log = (ctx: any) => console.log(chalk.green(ctx)); // 封装日志输出

const repo = "https://gitee.com/kiyun/et_tools.git/";

const program = new Command();

program.version(_package.version);

program
    .command('init <pkg name>')
    .description('init extension template')
    .action(async (name) => {
        clear();
        log(await figlet('Hello ' + name));

        const process = ora(`⏳下载...... ${repo}`);
        process.start();

        // gitclone(repo, name, { checkout: 'template', shallow: true }, function (err: any) {
        //     if (err === undefined) {
        //         rm(name + '/.git');
        //     } else {
        //     }
        // });

        process.succeed();
        log(`安装完成`);
    });


program.parse(process.argv);