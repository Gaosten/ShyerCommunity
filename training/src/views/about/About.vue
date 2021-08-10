<template>
  <div>
      <tab-bar-mobile v-if="$store.state.screenWidth"></tab-bar-mobile>
      <tab-bar v-else></tab-bar>
      <about-body></about-body>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TabBar from '../../components/common/tabbar/TabBar'
import BottomBar from '../../components/common/bottombar/BottomBar'
import AboutBody from './childcomps/AboutBody'
import TabBarMobile from '../../components/common/tabbarmobile/TabBarMobile.vue'
export default {
components:{
    TabBar,
    AboutBody,
    BottomBar,
    TabBarMobile
}
}
</script>

<style>






body {
  background-color: #2c3e50;
}

</style>