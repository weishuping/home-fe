<!--
 * @Author: your name
 * @Date: 2020-10-29 11:42:25
 * @LastEditTime: 2020-11-02 14:31:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/views/menu/FooterInfo.vue
 -->
 
<template>
    <footer>
        <div>@Copyright 2017 <span class="bold">Thought</span>Works</div>
    </footer>
</template>
 
<script >
export default {
    name: 'FooterInfo'
};
</script>
 
 <style lang="less">
@import (reference) url('src/assets/style/variable.less');
 footer {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 30px;
    .bold {
        font-weight: 600;
        
    }
 }
 
 </style>
