<template>
  <div class="page">
    <div class="container">
      <div>
      <p><span class="name">Pink Floyd</span> were an English rock band formed in London in 1965. They achieved <strong>international acclaim</strong> with their progressive and psychedelic music. Distinguished by their <strong>philosophical lyrics</strong>, <strong>sonic experimentation</strong>, <strong>extended compositions</strong>, and <strong>elaborate live shows</strong>, they are one of the most commercially successful and influential groups in popular music history.</p>    
    </div>
    <div>
      <album-list :albums="albums"></album-list>
    </div>
    </div>
  </div>
</template>
<script>
import Albums from '@/components/Albums.vue'
export default {
  components: {
    'album-list': Albums
  },
  data() {
    return {
      album: '',
      albums: [
        {name: 'Meddle', year: '1971', cover: require('../assets/pink-meddle.jpg')},
        {name: 'Dark Side of the Moon', year: '1973', cover: require('../assets/pink-dark.jpg')},
        {name: 'The Wall', year: '1979', cover: require('../assets/pink-wall.jpg')},
        {name: 'Pulse', year: '1985', cover: require('../assets/pink-pulse.jpg')}
        
      ]
    }
  }
}
</script>