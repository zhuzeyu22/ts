const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');

const tsConfigPath = path.join(__dirname, './tsconfig.json');

const srcDir = path.join(__dirname, './src');
const distDir = path.join(__dirname, './dist');

module.exports = {
    mode: 'development',
    entry: path.join(srcDir, './index.ts'),
    target: 'electron-main',
    output: {
        filename: 'main.js',
        path: distDir,
    },
    node: false,
    resolve: {
        alias: {
            '@ace': path.resolve(__dirname, 'node_modules/@ace'),
        },
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.less', '.node'],
        mainFields: ['main'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: tsConfigPath,
            }),
        ],
    },
    module: {
        // https://github.com/webpack/webpack/issues/196#issuecomment-397606728
        exprContextCritical: false,
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: tsConfigPath,
                    transpileOnly: true,
                },
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            },
            {
                test: /\.node$/,
                loader: "node-loader",
            }
        ],
    },
    // externals: [
    //     ({ context, request }, callback) => {
    //         if (['kfr'].indexOf(request) !== -1) {
    //             return callback(null, 'commonjs ' + request);
    //         }
    //         callback();
    //     },
    // ],
    //   resolveLoader: {
    //     modules: [path.join(__dirname, '../node_modules')],
    //     extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    //     mainFields: ['loader', 'main'],
    //   },
};
