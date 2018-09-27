<template>
    <div class="page page-home">
    <div class="container">
      <HelloWorld msg="I am the HelloWorld component."/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
