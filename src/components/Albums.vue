<template>
    <ul class="discography">
      <li v-for="(data, index) in albums" :key='index'>
        <img :src="data.cover" alt="Album cover">
        <span>{{ data.name }}</span> (<span>{{ data.year }}</span>)
        
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    albums: {
      type: Array
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
