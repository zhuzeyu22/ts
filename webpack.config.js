const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');

const tsConfigPath = path.join(__dirname, './tsconfig.json');

const srcDir = path.join(__dirname, './src');
const distDir = path.join(__dirname, './dist');

module.exports = {
    mode: 'development',
    entry: path.join(srcDir),
    target: 'node14.17',
    node: false,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.less', '.node'],
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
};
