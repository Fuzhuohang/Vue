<template>
  <div class="help-doc">
    <img alt="Vue logo" src="../../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'HelpDoc',
  components: {
    HelloWorld
  }
}
</script>
<style>
.help-doc{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>