<template>
  <div id="app">
    <div class="header">
      <header-vue></header-vue>
    </div>
    <div class="body">
      <!-- <help-doc-vue></help-doc-vue> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import headerVue from './components/header/header.vue'
  // import helpDocVue from './views/helpDoc/help-doc.vue'

  export default {
    name: 'App',
    components: {
      headerVue,
      // helpDocVue
    }
  }
</script>

<style>
  @import url("./styles/index.less");
  #app {
    
  }
</style>
