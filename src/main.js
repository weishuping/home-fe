import Vue from 'vue';
import App from './App.vue';
import router from 'router';

import 'assets/style/base.less';
import '@/assets/fonticons/fonts.css';

import $ajax from '@/api/factory.js';//引入文件
Vue.prototype.$ajax = $ajax;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
