<template>
  <div class="page">
    <div class="container">
      <div>
      <p><span class="name">Led Zeppelin</span> were an English rock band formed in London in 1968. The group consisted of guitarist <strong>Jimmy Page</strong>, singer <strong>Robert Plant</strong>, bassist and keyboardist <strong>John Paul Jones</strong>, and drummer <strong>John Bonham</strong>. The band's heavy, guitar-driven sound has led them to be cited as <strong>one of the progenitors of heavy metal</strong>. Their style drew from a wide variety of influences, including blues, psychedelia, and folk music.</p>
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
        {name: 'Led Zeppelin II', year: '1969', cover: require('../assets/Led-II.jpg')},
        {name: 'Led Zeppelin IV', year: '1971', cover: require('../assets/Led-IV.jpg')},
        {name: 'Houses of the Holy', year: '1973', cover: require('../assets/Led-Houses.jpg')},
        {name: 'Coda', year: '1982', cover: require('../assets/Led-Coda.jpg')}
        
      ]
    }
  }
}
</script>


