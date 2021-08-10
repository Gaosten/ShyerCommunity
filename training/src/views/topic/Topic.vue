<template>
  <div>
  <tab-bar-mobile v-if="$store.state.screenWidth"></tab-bar-mobile>
  <tab-bar v-else></tab-bar>
  <topic-form></topic-form>
  <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar.vue'
import BottomBar from 'common/bottombar/BottomBar'
import TopicForm from './childcomps/TopicForm.vue'
import TabBarMobile from '../../components/common/tabbarmobile/TabBarMobile.vue'

export default {
    components:{
        TabBar,
        BottomBar,
        TopicForm,
        TabBarMobile

    }

}
</script>

<style>

</style>