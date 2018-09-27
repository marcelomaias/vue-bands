<template>
  <div class="page page-led">
    <div class="container">
      <div>
      <h1>Led Zeppelin</h1>
      <p>Led Zeppelin were an English rock band formed in London in 1968. The group consisted of guitarist Jimmy Page, singer Robert Plant, bassist and keyboardist John Paul Jones, and drummer John Bonham. The band's heavy, guitar-driven sound has led them to be cited as one of the progenitors of heavy metal. Their style drew from a wide variety of influences, including blues, psychedelia, and folk music.</p>
    </div>
    <div>
      <h2>Discography</h2>

      <Albums/>

      <ul class="discography">
        <li>
          <img src="../assets/led1.jpg" alt="" class="animated fadeIn">
          <span class="animated fadeIn d-100">Led Zeppelin (1969)</span></li>
        <li>
          <img src="../assets/led2.jpg" alt="" class="animated fadeIn d-100">
          <span class="animated fadeIn d-100">Led Zeppelin II (1969)</span></li>
        <li>
          <img src="../assets/led3.jpg" alt="" class="animated fadeIn d-200">
          <span class="animated fadeIn d-100">Led Zeppelin III (1970)</span></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Albums from '@/components/Albums.vue'

export default {
  name: 'led',
  components: {
    Albums
  }
}
</script>
