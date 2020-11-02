<!--
 * @Author: your name
 * @Date: 2020-10-30 20:51:18
 * @LastEditTime: 2020-11-02 18:09:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/components/BaseDialog.vue
 -->
<template>
    <div class="item-overlay">
        <span class="arrow">
         
        </span>
        <div class="dialog-header">
            <i class="icon-close" @click="cancel"></i>
        </div>
        <div class="dialog-body">
            <p>Separate multiple resource name with commas</p>

            <input 
                placeholder="e.g. Chrome,firfox"
                :value="value"
                @change="change"
                class="input-tag"/>
        </div>
        <slot name="footer">
            <div class="dialog-footer">
            
                <button 
                    type="button"
                    class="mid primary"
                    @click="confirm">Add Resources</button>
                <button 
                    type="button"
                    class="mid normal"
                    @click="cancel">Cancel</button>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'BaseDialog',
    props: {
        // 开关弹窗的标示
        open: {
            type: Boolean,
            require: true,
            default: () => false,
        }
    },
    data() {
        return {
            value: ''
        };
    },
    methods: {
        // input发生变化
        change(event) {
            this.value = event.target.value;
        },
        // 确定，传出数据
        confirm() {
            // 更新数据
            if (this.value) {
                this.$emit('change', this.value.split(','));
                this.value = '';
                this.$emit('update:open', false);
            }
        },
        cancel() {
            this.$emit('update:open', false);
            this.value = '';
        }
    }
};
</script>

<style lang="less">
@import (reference) url('src/assets/style/variable.less');

 .item-overlay {
    position: absolute;
    left: -20px;
    top: 40px; // 24+20
    width: 570px;
    height: 160px;
    background: @white;
    z-index: 99;
    padding: 12px 20px;
    border: 1px solid @blue;
    i {
        cursor: pointer;
    }
    &::before {
          position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: -32px;
        border: 16px;
        border-left: 9px;
        border-right: 9px;

        border-style:dashed dashed solid dashed;
        border-color:transparent transparent @blue transparent;
    }
    &::after {
         position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: -26px;
        left: 21px;
        border: 13px;
        border-left: 8px;
        border-right: 8px;
        border-style:dashed dashed solid dashed;
        border-color:transparent transparent #fff transparent;
    }
    .dialog-header {
        display: flex;
        justify-content: flex-end;
        i {
            font-size: @font-size-large;
            font-weight: @font-weight-normal;
            color: @blue;
            &:hover {
                color: @blue-hover;
            }
        }
    }
    .dialog-body {
        display: flex;
        flex-direction: column;;
        flex: 1;
        p {
            margin-bottom: 12px;
        }
         .input-tag {
            height: 36px;
            border: 1px solid @gray;
            color: @blue;
            margin-bottom: 14px;
            border-color: #EFEFEF;
            @border-radius: 2px;
            padding: 0 12px;
            box-shadow: 0 0 2px #EFEFEF inset;
    }
    }
    .dialog-footer {
        .primary {
            margin-right: 20px;
        }
    }
  }
</style>
