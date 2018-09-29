<template>
    <div class="page page-home">
    <div class="container">
      <Hello msg=""/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components: {
    Hello
  }
}
</script>
