<template>
  <div>
      <tab-bar-mobile v-if="$store.state.screenWidth"></tab-bar-mobile>
      <tab-bar v-else></tab-bar>
      <community-selection></community-selection>
      <community-body></community-body>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar.vue'
import BottomBar from 'common/bottombar/BottomBar'
import CommunityBody from './childcomps/CommunityBody.vue'
import communitySelection from './childcomps/CommunitySelection.vue'
import TabBarMobile from '../../components/common/tabbarmobile/TabBarMobile.vue'




export default {
components:{
TabBar,
BottomBar,
CommunityBody,
communitySelection,
TabBarMobile

}
}
</script>

<style >

body {
    background-color: #2c3e50;
}

.bottombar {
    width: 90%;
    margin-top: 50px;
}

</style>