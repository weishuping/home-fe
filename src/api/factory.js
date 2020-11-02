/*
 * @Author: your name
 * @Date: 2020-11-01 22:35:11
 * @LastEditTime: 2020-11-02 11:44:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/api/factory.js
 */
// import http from 'axios';

import axios from 'axios';

function $ajax(options)  {

    let conf = Object.assign({

        url: '',

        method: 'get',

        responseType: 'text',

        ContentType: 'application/json'

    }, options);

    conf.url = `/api${options.url}`;

    let pm = axios(conf).then(xhr => {


        return Promise.resolve(xhr.data);

    }).catch(err => {


        return Promise.reject(new Error('request 抛出错误' + err));

    });
    return pm;

}
export default $ajax;
