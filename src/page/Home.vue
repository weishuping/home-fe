<!--
 * @Author: your name
 * @Date: 2020-10-29 14:58:00
 * @LastEditTime: 2020-10-29 18:23:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/src/page/Home.vue
 -->
<template>
    <div>
        <slider-bar />
        <agent-info />
    </div>
</template>

<script>
import SliderBar from '@/views/slider/SliderBar';
import AgentInfo from '@/views/agent/AgentInfo';
export default {
    name: 'HomeInfo',
    components: {
        SliderBar,
        AgentInfo
    }
};
</script>

<style>

</style>
