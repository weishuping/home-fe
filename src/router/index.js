/*
 * @Author: wsp
 * @Date: 2020-10-28 20:29:17
 * @LastEditTime: 2020-10-30 15:03:56
 * @LastEditors: Please set LastEditors
 * @Description: 路由
 * @FilePath: /fe-homework/router/index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import HomeInfo from 'page/Home';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'homeInfo',
            components: {
                container: HomeInfo
            }
        }
    ]
});
