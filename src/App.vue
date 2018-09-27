<template>
  <div id="app">
    <section id="nav-area">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/led-zeppelin">Led Zeppelin</router-link> |
        <router-link to="/pink-floyd">Pink Floyd</router-link> |
        <router-link to="/rush">Rush</router-link>
      </div>
    </section>
    
    <transition name="page-anim" enter-active-class="page-in" leave-active-class="page-out">
      <router-view/>
    </transition>
    
  </div>
</template>

<style lang="scss" src="./scss/App.scss"></style>
