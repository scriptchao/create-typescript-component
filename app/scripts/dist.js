/**
 * Created by tony on 2018/9/29
 */
const webpack = require('webpack');
const config = require('../config/webpack.config.dist');

webpack(config, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('compile file success!')
    }
});

