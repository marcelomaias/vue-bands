<template>
  <div id="app" v-bind:class=" 
    $route.path ==='/vue-bands-prod/' ?  'page-home' :
    $route.path ==='/vue-bands-prod/led-zeppelin' ?  'page-led' : 
    $route.path ==='/vue-bands-prod/pink-floyd' ?  'page-pink' :
    $route.path ==='/vue-bands-prod/rush' ?  'page-rush' :
    'others' ">

    <div id="background-image"></div>
    
    <section id="nav-area">
      <div id="nav">
        <ul>
          <li><router-link to="/vue-bands-prod/">Choose a Band:</router-link></li>
          <li><router-link to="/vue-bands-prod/led-zeppelin"><img src="./assets/logo-led.svg" alt="Led Zeppelin"></router-link></li>
          <li><router-link to="/vue-bands-prod/pink-floyd"><img src="./assets/logo-pink.svg" alt="Pink Floyd"></router-link></li>
          <li><router-link to="/vue-bands-prod/rush"><img src="./assets/logo-rush.svg" alt="Rush"></router-link></li>
        </ul>     
      </div>
    </section>
    
    <transition appear name="page" mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" src="./scss/App.scss"></style>
