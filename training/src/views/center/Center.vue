<template>
<div>
  <tab-bar></tab-bar>
  <center-body></center-body>
  <bottom-bar></bottom-bar>
</div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar.vue'
import BottomBar from 'common/bottombar/BottomBar'
import CenterBody from './childcomps/CenterBody.vue'



export default {
    components:{
        TabBar,
        BottomBar,
        CenterBody
    }
}
</script>

<style>

body {
    
    background-color: #2c3e50;
}
</style>