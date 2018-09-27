<template>
    <ul>
        <li v-for="(data, index) in albums" :key='index'>{{ data.album }}</li>
    </ul>
</template>
<script>
export default {
  name: "Albums",
  data() {
    return {
      albums: [
          { album: "Led One" }, 
          { album: "Led Two" }
        ]
    };
  }
};
</script>
