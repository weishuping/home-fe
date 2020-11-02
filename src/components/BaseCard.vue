<!--
 * @Author: your name
 * @Date: 2020-10-29 17:24:00
 * @LastEditTime: 2020-11-02 11:49:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/components/Card.vue
 -->
<template>
    <div
        class="card"
        :class="this.className">
        <p class="card-name">{{this.showName}}</p>
        <div :class="['card-icon', this.iconName]"></div>
        <div class="card-number">{{this.showNumber}}</div>
    </div>
</template>

<script>
export default {
    name: 'BaseCard',
    props: {
        showName: {
            type: String,
            default: () => ''
        },
        showNumber: {
            type: [String, Number],
            default: () => 0
        },
        className: {
            type: String,
            default: () => ''
        },
        iconName: {
            type: String,
            default: () => ''
        }
    }
};
</script>

<style lang="less">
    @import (reference) url('src/assets/style/variable.less');
.card {
    display: flex;
    height: 115px;
    padding: 20px;
    color: @white;
    margin-right: 30px;
    &-name {
        font-size: 14px;
        font-weight: bold;
    }
    &-icon {
        font-size: 144px;
        color: rgba(245, 245, 245, 0.2);
        margin-top: -30px;
    }
    &-number {
        font-size: 48px;
        margin-top: 20px;
    }
}
</style>
