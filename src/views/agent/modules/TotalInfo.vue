<!--
 * @Author: your name
 * @Date: 2020-10-30 14:42:50
 * @LastEditTime: 2020-11-02 15:30:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/views/agent/modules/TotalCard.vue
 -->
<template>
    <div class="total-card">
        <div
            class=" column" 
            v-for="(total, index) in totalData"
            :key="`t${index}`">
            <div class="column-top">{{total.showName}}</div>
            <div class="column-bottom">{{total.showValue}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TotalInfo',
    props: {
        totalData: {
            type: Array,
            default: () => ({})
        }
    }
};
</script>

<style lang="less" scoped>
@import (reference) url('src/assets/style/variable.less');

    .total-card {
        display: flex;
        height: 115px;
        padding: 20px;
        flex: 1;
        background: @white;
        .column {
            align-items: center;
            display: flex;
            flex-direction: column;
            flex: 1;
            &-top {
                height: 56px;
                font-size: @font-size-normal;
            }
            &-bottom {
                flex: 1;
                font-size: @font-size-large-xl;
                color: @black;
                font-weight: @font-weight-large;
            }
        }
    }
</style>
