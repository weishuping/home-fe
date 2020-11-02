<!--
 * @Author: your name
 * @Date: 2020-10-29 18:13:42
 * @LastEditTime: 2020-11-02 16:56:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/views/agent/AgentInfo.vue
 -->
<template>
    <div class="content">
        <div class="banner">
            <base-card
                v-for="(card, index) in cardList"
                :key="`card${index}`"
                :showName="card.showName"
                :showNumber="card.showNumber"
                :className="card.className"
                :iconName="card.iconName">
            </base-card>
            <total-info 
                :totalData="totalData"/>
        </div>
        <base-tab>
            <template slot="right">
                <div class="tab-right">
                    <span class="input-wrapper">
                        <i class="icon-search" v-show="!searchFlag && !searchVal"/>
                        <input
                            type="text"
                            :value="searchVal"
                            @focus="inputChange('focus', $event)"
                            @blur="inputChange('blur', $event)"/>
                    </span>
                    <i
                        :class="['icon-th-card', showType === 'card' ? 'actived' : '']"
                        @click="switchType('card')"/>
                    <i
                        :class="['icon-th-list', showType === 'list' ? 'actived' : '']"
                        @click="switchType('list')"/>
                </div>
            </template>
        </base-tab>
        <div class="resource-list">
            <list-item 
                v-show="showType === 'list'"
                v-for="(agent, index) in agentList"
                :key="`agent${index}`"
                :agent="agent"
                :index="index"
                @updateList="updateList"/>
            <card-item v-show="showType === 'card'"/>
        </div>
    </div>
</template>

<script>
import BaseCard from 'components/BaseCard';
import TotalInfo from './modules/TotalInfo';
import ListItem from './modules/ListItem';
import CardItem from './modules/CardItem';

import BaseTab from 'components/BaseTab';

import {groupBy} from 'lodash';
export default {
    name: 'AgentInfo',
    components: {
        BaseCard,
        TotalInfo,
        BaseTab,
        ListItem,
        CardItem
    },
    data() {
        return {
            showType: 'list', // 列表的展现形式
            cardList: [], // 状态卡片数据
            totalData: [], // 汇总卡片数据
            agentList: [], // 资源列表数据
            searchVal: '', //查询字段
            searchFlag: false
        };
        
    },
    mounted() {
        this.getList();
    },
    methods: {
        // 获取资源列表
        getList() {
            this.$ajax({
                url: '/agents/'
            }).then((data) => {
                this.agentList = data;
                // 处理卡片数量等信息
                this.cardList = [];
                let statusObj = groupBy(data, 'status');
                let tempCardList = [];
                for (const [key, value] of Object.entries(statusObj)) {
                    tempCardList.push({
                        showName: key,
                        showNumber: value.length,
                        className: key.toLowerCase(),
                        iconName: key === "building" ? 'icon-cog' : 'icon-coffee'
                    });
                }
                this.cardList = tempCardList;
                // 处理汇总卡片
                let typeObj = groupBy(data, 'type');
                let allType = 0;
                let typeAllList = [
                    {
                        showName: 'ALL',
                        showValue: allType
                    }
                ];
                for (const [key, value] of Object.entries(statusObj)) {
                    typeAllList.push({
                        showName: key.toUpperCase(),
                        showValue: value.length
                    });
                    allType += value.length;
                }
                typeAllList[0].showValue = allType;
                this.totalData = typeAllList;
            });
        },
        // 更新列表
        updateList(agent, i) {
            this.$ajax({
                url: `/agents/${agent.id}`,
                method: 'put',
                data: agent
            }).then(data => {
                this.agentList.splice(i, 1, data);
            });
        },
        // 切换列表
        switchType(type) {
            this.showType = type;
        },
        // 搜索
        inputChange(eventType, event) {
            this.searchVal = event.target.value;
            this.searchFlag = eventType === 'focus' ?  true : false;
        }
    }
};
</script>

<style lang="less">
    @import (reference) url('src/assets/style/variable.less');

    .building {
        background: @yellow;
    }
    .idle {
        background: @green;
    }
    .banner {
        display: flex;
        flex-direction: row;
        .card-info {
            margin-right: 24px;
        }
        input {
            display: flex;
            flex: 1;
        }
    }
    .tab-right {
        display: flex;
        flex-direction: row;
        flex: 1;
        .input-wrapper {
            display: flex;
            flex-direction: row;
            flex: 1;
            position: relative;
            input {
                margin-left: 30px;
                width: 172px;
                height: 28px;
                border: 1px solid @gray-3;
                background: #F3F3F3;
                padding: 0 10px;
            }
            .icon-search {
                color: @gray-2;
                position: absolute;
                left: 35px;
                top: 3px;
            }
        }
        i {
            display: flex;
            font-size: 20px;
            margin-right: 25px;
            cursor: pointer;
            &.actived {
                color: @blue;
            }
        }
    }
    .resource-list {
        flex: 1;
        flex-direction: column;
        overflow-y: auto;
    }
</style>
