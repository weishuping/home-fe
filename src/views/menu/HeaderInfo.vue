<!--
 * @Author: your name
 * @Date: 2020-10-28 20:43:06
 * @LastEditTime: 2020-11-02 17:04:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/views/menu/MenuInfo.vue
 -->
<template>
    <header>
        <img src="~/assets/svgs/logo.svg" height="40" width="auto"/>
        <div class="menu-right">
            <span class="photo">
            </span>
            <i
                :class="['toggle',status? 'icon-angle-up' : 'icon-angle-down']" 
                @click="showOverlay"/>
            <ul class="menu-overlay" v-show="!status">
                <li @click="toggle('profile')">
                    <i class="icon-id-card" />Profile
                </li>
                <li @click="toggle('out')">
                    <i class="icon-sign-in" />Sign Out
                </li>

            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderInfo',
    data() {
        return {
            status: true
        };
    },
    methods: {
        showOverlay() {
            this.status = !this.status;
        },
        toggle(type) {
            this.status = true;
            if (type === 'profile') {
                console.log('p');
            } else {
                console.log('o');
            }
        } 
    }
};
</script>

<style lang="less">
    header {
        display: flex;
        justify-content: center;
        height: 60px;
        padding: 10px;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.15);
        .menu-right {
            position: absolute;
            width: 100px;
            right: 100px;
            height: 40px;
            top: 10px;
            display: flex;
            align-items: center;
            .photo {
                display: inline-block;
                width: 40px;
                height: 40px;
                border: 1px solid #ccc;
                border-radius: 50%;
            }
            .toggle {
                cursor: pointer;
                margin-left: 12px;
                &.toggle-up {
                    transform: rotate(180deg);
                }
            }
            .menu-overlay {
                position: absolute;
                width: 110px;
                border: 1px solid #eee;
                padding: 10px 0;
                top: 50px;
                border-radius: 4px;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                background: #fff;
                li {
                    height: 32px;
                    padding: 0 10px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    &:hover {
                        background: #EFEFEF;
                    }
                    i {
                        margin-right: 12px;
                        font-size: 14px;
                        width: 14px;
                        height: 14px;
                    }
                }
            }
            
            
        }
    }
    
</style>
