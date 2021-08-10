<template>
<body>
  <tab-bar-mobile v-if="$store.state.screenWidth"></tab-bar-mobile>
  <tab-bar v-else></tab-bar>
  <keep-alive>
  <login-form></login-form>
  </keep-alive>
  <bottom-bar></bottom-bar>
</body>
</template>

<script>

import TabBar from 'common/tabbar/TabBar.vue'
import BottomBar from 'common/bottombar/BottomBar'
import LoginForm from './childcomps/LoginForm'
import TabBarMobile from '../../components/common/tabbarmobile/TabBarMobile.vue'

export default {
name:'Register',
components:{ 
    
    TabBar,
    BottomBar,
    LoginForm,
    TabBarMobile

}
}
</script>

<style scoped>

body {
  background-color: #2c3e50;
}
</style>