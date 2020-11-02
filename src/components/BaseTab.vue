<!--
 * @Author: your name
 * @Date: 2020-10-30 14:48:10
 * @LastEditTime: 2020-10-30 20:53:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/views/agent/modules/Tab.vue
 -->
<template>
    <div class="tab">
        <span
            v-for="(tab, index) in tabsData"
            :key="`tab${index}`"
            @click="swtich(tab)"
            class="normal"
            :class="{'actived': tab.key === currentKey}">
            {{tab.name}}
        </span>
        <slot name="right"/>
    </div>
</template>

<script>
export default {
    name: 'BaseTab',
    data() {
        return {
            tabsData: [{
                key: 'All',
                name: 'All'
            }, {
                key: 'Physical',
                name: 'Physical'
            }, {
                key: 'Virtual',
                name: 'Virtual'
            }],
            currentKey: 'All'
        };
    },
    methods: {
        swtich(data) {
            this.currentKey = data.key;
            // 请求数据
        }
    }
};
</script>

<style lang="less">
@import (reference) url('src/assets/style/variable.less');
    .tab {
        display: flex;
        background: #fff;
        height: 40px;
        align-items: center;
        .normal {
            display: flex;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
            line-height: 40px;
            padding: 0 20px;
            border-right: 1px solid #EFEFEF;
            min-width: 70px;
            &.actived {
                color: @blue;
                position: relative;
                &::after {
                    position: absolute;    
                    bottom:0;    
                    width: 100%;    
                    left:0;    
                    content: '';    
                    height:0;    
                    border-bottom: 3px solid @blue;
                }
            }
        }
    }
</style>
