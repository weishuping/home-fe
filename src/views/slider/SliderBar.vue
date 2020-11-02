<!--
 * @Author: your name
 * @Date: 2020-10-29 14:13:57
 * @LastEditTime: 2020-11-02 11:30:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/views/menu/SliderBar.vue
 -->
<template>
    <aside>
        <ul class="left-menu">
            <li
                v-for="(menu, index) in leftMenu"
                :key="`m${index}`">
                <i :class="menu.icon"/>
                <span>{{menu.name}}</span>
            </li>
        </ul>
        <history-record />
    </aside>
</template>

<script>
import HistoryRecord from './HistoryRecord';
import {LEFT_MENU_ITEM} from 'utils/contant.js';
export default {
    components: {
        HistoryRecord
    },
    data() {
        return {
            leftMenu: LEFT_MENU_ITEM
        };
    }
};
</script>

<style lang="less">
    @import (reference) url('src/assets/style/variable.less');
    aside {
        display: flex;
        width: 270px;
        height: 100%;
        flex-direction: column;
        background: @dark;
        margin-right: 20px;
        .left-menu {
            flex: 1;
            color: @gray-1;
            li {
                height: 45px;
                display: flex;
                align-items: center;
                padding: 0 40px;
                cursor: pointer;
                &:hover {
                    background: @dark-hover;
                    color: @blue;
                }
                i {
                    margin-right: 12px;
                    font-size: 20px;
                }
            }
        }
    }
</style>
