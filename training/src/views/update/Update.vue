<template>
  <div>
  <tab-bar-mobile v-if="$store.state.screenWidth"></tab-bar-mobile>
  <tab-bar v-else></tab-bar>
  <update-body></update-body>
  <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar.vue'
import BottomBar from 'common/bottombar/BottomBar'
import TabBarMobile from '../../components/common/tabbarmobile/TabBarMobile.vue'
import UpdateBody from './childcomps/Updatebody.vue'


export default {
components:{
    TabBar,
    BottomBar,
    UpdateBody,
    TabBarMobile
}
}
</script>

<style>

body {
    background-color: #2c3e50;
}

</style>