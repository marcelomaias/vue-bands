<template>
  <div class="page">
    <div class="container">
      <div>
      <p><span class="name">Rush</span> is a Canadian rock band comprising <strong>Geddy Lee</strong> (bass, vocals, keyboards), <strong>Alex Lifeson</strong> (guitars), and <strong>Neil Peart</strong> (drums, percussion, lyrics). Formed in 1968, the band went through several configurations until arriving at its longest and most popular line-up when <strong>Peart</strong> replaced original drummer <strong>John Rutsey</strong> in July 1974, two weeks before the group's first United States tour.</p>
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
        {name: 'Hemispheres', year: '1978', cover: require('../assets/rush-hemispheres.jpg')},
        {name: 'Moving Pictures', year: '1981', cover: require('../assets/rush-moving.jpg')},
        {name: 'Hold Your Fire', year: '1987', cover: require('../assets/rush-hold.jpg')},
        {name: 'A Show of Hands', year: '1989', cover: require('../assets/rush-show.jpg')}
        
      ]
    }
  }
}
</script>