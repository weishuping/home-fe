<!--
 * @Author: your name
 * @Date: 2020-10-29 14:55:08
 * @LastEditTime: 2020-11-02 15:01:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/views/slider/HistoryRecourd.vue
 -->
<template>
    <div class="history-record">
        <p>History</p>
        <ul>
            <li>fjskldjfksdjfsdjfslkdjf </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HistoryRecord'
};
</script>

<style lang="less">
    @import (reference) url('src/assets/style/variable.less');

    .history-record {
        padding: 0 10px;
        margin-bottom: 10px;
        p {
           font-size: 24px;
           color: @gray-1;
        }
        ul {
            list-style: inside;
            color: @gray-2;
            li {
                line-height: 28px;
            }
        }
    }
</style>
