<template>
  
  <Header v-if="this.$route.path !=='/contact'"></Header>
  <AltHeader v-if="this.$route.path === '/contact'"></AltHeader>
  <router-view></router-view>

</template>

<script>


import Header from './components/Header.vue';
import AltHeader from './components/AltHeader.vue';
// import Contact from './views/Contact.vue';
// import Index from './views/Index.vue';
// import ProjetWeb from './views/ProjetWeb.vue';

export default {
  name: 'App',
  components: {
    
    Header,
    AltHeader
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


 
</style>
