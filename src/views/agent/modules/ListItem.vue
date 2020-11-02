<!--
 * @Author: your name
 * @Date: 2020-10-30 15:22:50
 * @LastEditTime: 2020-11-02 16:54:33
 * @LastEditors: Please set LastEditors
 * @Description: 行展示组件
 * @FilePath: /fe-homework/src/views/agent/modules/ListItem.vue
 -->
<template>
    <div class="row-item">
        <div class="row-item-left">
            <img :src="'/static/images/' + transOsPath(agent.os) + '.png'"/>
        </div>
        <div class="row-item-right">
            <div class="details">
                <i class="icon-desktop icon-show"/>
                <span
                    class="domain-name long-text"
                    :title="agent.name">{{agent.name}}</span>
                <div class="classify" v-if="agent.status">
                    <span :class="agent.status.toLowerCase()">{{agent.status}}</span>
                </div>
                <i class="icon-info icon-show"/>
                <span class="ip-name">{{agent.ip}}</span>
                <i class="icon-folder icon-show"/>
                <span class="path-name long-text">{{agent.location}}</span>
            </div>
            <div class="settings" >
                <i
                    class="icon-plus"
                    @click="addResource"
                    aria="item-overlay"/>
                <span
                    class="item" 
                    v-for="(resource, index) in agent.resources"
                    :key="`res${index}`">
                    {{resource}}
                    <i
                        class="icon-trash"
                        @click="updateList(index)"/>
                </span>
                <base-dialog
                    v-show="open"
                    :open.sync="open"
                    @change="updateList"/>
                <div class="deny">
                    <i class="icon-deny" />
                    Deny
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseDialog from 'components/BaseDialog';
import {cloneDeep} from 'lodash';
export default {
    name: 'ListItem',
    components: {
        BaseDialog
    },
    props: {
        // 一行 资源对象
        agent: {
            type: Object,
            default: () => ({}),
            require: true
        },
        index: {
            type: Number,
            default: () => 0
        }
    },
    data() {
        return {
            open: false // 控制弹窗
        };
    },
    methods: {
        // 添加
        addResource() {
            this.open = true;
            // hack
            debugger;
            let nodes = document.querySelectorAll('.item-overlay');
            for (let index = 0; index < nodes.length; index++) {
                const element = nodes[index];
                if (index === this.index) {
                    element.style.display = "";
                } else {
                    element.style.display = "none";
                }
            }
        },
        // 更新列表
        updateList(arg) {
            console.log(cloneDeep, _.difference);
            let copyAgent = cloneDeep(this.agent);
            let resource = copyAgent.resources || [];
            // 新增、修改
            if (Array.isArray(arg)) {
                let allRes = resource.concat(arg);
                let difference = _.difference(arg, resource);
                if (difference.length) {
                    alert(`添加${difference.length}个资源`);
                } else {
                    alert('重复添加！');
                    return false;
                }
                copyAgent.resources = Array.from(new Set(allRes));
            } else {
            // 删除
                resource.splice(arg, 1);
            }
            this.$emit('updateList', copyAgent, this.index);
        },
        // trans os与图之间的关系
        transOsPath(osValue) {
            let path = '';
            switch (osValue) {
                case 'windows':
                case 'ubuntu':
                case 'suse':
                    path = osValue;
                    break;
                case 'debian':
                    path = 'debin';
                    break;
                case 'centos':
                    path = "cent_os";
                    break;
                default:
                    break;
            }
            return path;
        }
    }
};
</script>

<style lang="less">
@import (reference) url('src/assets/style/variable.less');

    .row-item {
        display: flex;
        padding: 20px 20px 0 20px;
        background: @white;
        margin-top: 20px;
        &-left {
            width: 100px;
            height: 100%;
        }
        &-right {
            font-size: @font-size-normal;
            flex: 1;
            .details {
                display: flex;
                align-items: center;
                margin-bottom: 30px;
                .icon-show {
                    font-size: 20px;
                    color: #B7B7B7;
                    margin-right: 12px;
                }
                // .icon-desktop 
                .domain-name {
                    width: 230px;
                    color: @blue;
                    margin-right: 16px;
                }
                .classify {
                    width: 60px;
                    margin-right: 30px;
                    color: @white;
                    span {
                        width: 100%;
                        padding: 0 5px;
                    }
                }
                .ip-name {
                    margin-right: 24px;

                }
            }
            .settings {
                position: relative;
                padding-right: 90px;
                .icon-plus, .item {
                    display: inline-flex;
                    margin-right: 10px;
                    margin-bottom: 15px;
                }
                i {
                    cursor: pointer;
                }
                .icon-plus {
                    background: @blue;
                    padding: 5px 8px;
                    color: @white;
                    &:hover {
                        background: @blue-hover;
                    }
                }
               
                .item {
                    padding: 0 5px;
                    height: 25px;
                    background: @gray-3;
                    justify-content: center;
                    align-items: center;
                    font-weight: @font-weight-normal;
                    i {
                        margin-left: 10px;
                    }
                }
                .deny {
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: @blue;
                    width: 90px;
                    height: 28px;
                    line-height: 28px;
                    color: @white;
                    i > {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>
