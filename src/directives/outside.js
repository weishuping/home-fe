/*
 * @Author: your name
 * @Date: 2020-10-30 19:45:42
 * @LastEditTime: 2020-10-30 20:10:58
 * @LastEditors: Please set LastEditors
 * @Description: 局部注册指令
 * @FilePath: /fe-homework/src/directives/outside.js
 */

/**
 * 绑定指令
 * @param {*} el 元素
 * @param {*} binding 对象
 */
function bindOutside(el, binding) {
    let {value, oldValue} = binding;
    if (value === oldValue) {
        return false;
    }
    if (typeof value !== 'function') {
        throw new Error('The outside events must be function');
    } else if (el.addEventListener) {
        oldValue && el.removeEventListener('click', value);
        el.addEventListener('click', e => {
            value && value(e, el);
        });
    } else if (el.attachEvent) {
        oldValue && el.detachEvent('onclick', oldValue);
        el.attachEvent('onclick', e => {
            value && value(e, el);
        });
    }
}
/**
 * 
 * @param {Object} el 绑定元素
 * @param {Object} param1 绑定的函数
 */
function unbindOutside(el, {value}) {
    if (value && typeof value === 'function') {
        if (el.removeEventListener) {
            el.removeEventListener('click', value);
        } else {
            el.detachEvent('onclick', value);
        }
    }
}

export default {
    // 插入节点
    inserted(el, binding) {
        bindOutside(el, binding);
    },
    // 组件Vnode和子Vnode更新调用
    componentUpdated(el, binding) {
        bindOutside(el, binding);
    },
    // 解绑
    unbind(el, binding) {
        unbindOutside(el, binding);
    }
};
