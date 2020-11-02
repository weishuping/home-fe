<template>
    <div id="app"  v-outside="handleClick">
        <header-info />
        <router-view name="container" class="container"/>
        <footer-info />
    </div>
</template>

<script>
import HeaderInfo from '@/views/menu/HeaderInfo.vue';
import FooterInfo from '@/views/menu/FooterInfo.vue';
import Outside from '@/directives/outside.js';

export default {
    name: 'App',
    components: {
        HeaderInfo,
        FooterInfo
    },
    directives: {
        Outside
    },
    methods: {
        handleClick(e, element) {
            let cont = document.querySelector('.item-overlay');
            if (e.target?.attributes?.aria?.value === 'item-overlay') {
                return false;
            }
            if (!cont.contains(e.target)) { // 判断是不是目标区域
                let nodes = document.querySelectorAll('.item-overlay');
                for (let index = 0; index < nodes.length; index++) {
                    const element = nodes[index];
               
                    element.style.display = "none";
                }
            }
        }
    }
};
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    min-height: 460px;
    width: 100%;
    height: 100%;
}
 
</style>
