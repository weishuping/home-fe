/* eslint-disable no-unused-vars */
/*
 * @Author: wsp
 * @Date: 2020-10-28 20:32:44
 * @LastEditTime: 2020-11-02 18:05:42
 * @LastEditors: Please set LastEditors
 * @Description: 工程配置
 * @FilePath: /fe-homework/vue.config.js
 */

// const { resolve } = require("core-js/fn/promise");
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    devServer: {
        // 不同端口，跨域，反向代理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                },
                onProxyReq: function (proxyReq, req, res) {
                    proxyReq.setHeader("host", 'localhost:8000');
                    // console.log(req, res);
                }
            }
        }
    },
    chainWebpack: config => {
        const types = ['vue'];
        types.forEach(type => {
            config.module
                .rule('less')
                .oneOf(type)
                .use('less-loader')
                .tap(options => Object.assign({}, options));
        });
        config.resolve.alias
            .set('@', resolve('src'))
            .set('svgs', resolve('src/assets/svgs'))
            .set('assets', resolve('src/assets'))
            .set('router', resolve('src/router'))
            .set('page', resolve('src/page'))
            .set('utils', resolve('src/utils'))
            .set('components', resolve('src/components'));

    },
    // css
    css: {
        extract: process.env.NODE_ENV !== 'development' ? true : false, // 是否使用css分离插件 ExtractTextPlugin
    },
    assetsDir: 'static',
    indexPath: 'index.html'
};
