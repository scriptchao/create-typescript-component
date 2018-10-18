/**
 * Created by tony on 2018/9/28
 */

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '..', 'src/index'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'index.min.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, and js files.
            test: /\.(tsx?)|(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};