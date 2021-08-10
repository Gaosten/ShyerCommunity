<template>
<body>
  <tab-bar-mobile v-if="$store.state.screenWidth"></tab-bar-mobile>
  <tab-bar v-else></tab-bar>
  <register-form></register-form>
  <bottom-bar></bottom-bar>
</body>
</template>

<script>

import TabBar from '../../components/common/tabbar/TabBar.vue'
import BottomBar from '../../components/common/bottombar/BottomBar'
import RegisterForm from './childcomps/RegisterForm.vue'
import TabBarMobile from '../../components/common/tabbarmobile/TabBarMobile.vue'

export default {
name:'Register',
components:{
   
    TabBar,
    BottomBar,
    RegisterForm,
    TabBarMobile

}
}
</script>

<style>

body {
  background-color: #2c3e50;
}

</style>