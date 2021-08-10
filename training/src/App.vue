<template>
  <div id="app">
    <keep-alive>
   <router-view v-if="isRouterAlive"></router-view>
   </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isRouterAlive:true
    }
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  },
  components: {
    
  }
}

</script>

<style>
@import "assets/css/base.css";
</style>
