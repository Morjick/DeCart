<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <div class="map_content">
        <Map 
          v-on:givemapstyle="getMapStyle"
          v-on:newcamera="getCenter"
        />
      </div>
      <div class="sidebar">
        <Sidebar 
          v-bind:posterStyle="posterStyle"
          ref="sidebar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Map from "@/components/map"

export default {
  name: "App",
  data() {
    return {
      posterStyle: '',
      coordinate: {
        lng: 'a',
        lat: 'b'
      },
    }
  },
  components: {
    Header,
    Map,
    Sidebar,
  },
  methods: {
    newCoordinate(timesCoordinate, e) {
      // получил координату для дальнейшей передачи на серв. В будущем, их можно будет полчуть несколько
      this.coordinate = timesCoordinate

      console.log(
        this.coordinate,
        "errors:" + e,
        "coordinate has been reworked"
      )
    },
    getMapStyle(thisItem) {
      // получил стиль карты, который отправляется в сайдбар, так происхоидит передача данных на серв
      this.posterStyle = thisItem
      this.$refs.sidebar.posterArray.style = thisItem 
      
    },
    getCenter(camera, zoom) {
      // this.coordinate.lng = camera.lng
      // this.coordinate.lat = camera.lat
      let tlat = camera.lat
      let tlng = camera.lng

      let tArray = {
        lng: tlng,
        lat: tlat
      }

      let thisZoom = zoom
      

      // console.log('App coordinate:',  tArray)
      this.$refs.sidebar.posterArray.center = tArray
      this.$refs.sidebar.posterArray.zoom = thisZoom
    }
  },
  watch: {
  },
  mounted() {
  },
}
</script>

<style >
@import "./style/main.css";
</style>
