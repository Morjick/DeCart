<template>
  <div class="map_inner">
    <div id="map">
      <div class="map_navbar">
        <div class="map_navitem">
          <img src="@/assets/sprytes/plus.png" alt="" class="map_navitem_img" />
        </div>
        <div class="map_navitem">
          <img src="@/assets/sprytes/minus.png" alt="" class="map_navitem_img" />
        </div>
        <div class="map_navitem">
          <img src="@/assets/sprytes/location.png" alt="" class="map_navitem_img" />
        </div>
      </div>
      <div class="map_info">
        © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> ©<a
          href="https://www.openstreetmap.org/copyright"
          >OpenStreetMap</a
        >
      </div>
    </div>
    <div class="map_style_menu">
      <button class="arrow_btn btn_up">
        <img src="@/assets/sprytes/arrow-up.png" alt="выше">
      </button>
      <div class="slider_wrapper">
        <button 
          class="map_slider_block "
          
        >
          <div 
            @click="givemapstyle" 
            id="streets-v11"
            class="map_slider_item map_slider_active"
          ></div>
          <div>Street</div>
        </button>
        <button 
            class="map_slider_block"
         >
            <div id="outdoors-v11" @click="givemapstyle" class="map_slider_item" ></div>
            <div>OutDoor</div>
         </button>
         <button 
            class="map_slider_block"
         >
          <div id="light-v10" @click="givemapstyle" class="map_slider_item" ></div>
          <div>Light</div>
         </button>
      </div>
      <button class="arrow_btn btn_down">
        <img src="@/assets/sprytes/arrow-down.png" alt="ниже">
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Map",
  data() {
    return {
      Coordinate: [20.51095, 54.70649],
      styleMap: 'mapbox://styles/mapbox/dark-v10',
    }
  },
  components: {
  },
  created() {},
  mounted() {
    this.initmap()
  },
  computed: {
  },
  methods: {
    addDotes() {},
    initmap() {
      const thi = this
  
      this.$mapboxgl.accessToken = "pk.eyJ1IjoibW9yamljayIsImEiOiJja3NidWF0ajUwYWk1MndwZmk3c290czhyIn0.-QX4ZH14vyOVyO-2cCPh_w"
      var map = new this.$mapboxgl.Map({
        container: "map",
        style: this.styleMap,
        center: [20.51095, 54.70649],
        zoom: 9,
      })

      map.on("move", function () {
        let center = map.getCenter()
        let zoom = map.getZoom()

        thi.$emit("newcamera" , center, zoom)
      })


      let allBtns = document.querySelectorAll('.map_slider_block')
      // сдесь определяется стиль, который выбирает пользователь и меняется встроеным методом "setStyle", так же отправляется с помощью $emit в родительский компонент (смотри метод getMapStyle)
      
      for( let thisBtn of allBtns) {
        thisBtn.onclick = (layer) => {   
          const layerId = layer.target.id
          
          map.setStyle('mapbox://styles/mapbox/' + layerId)
          
          this.styleMap = layerId

          let thisItem = String(layerId)

          this.$emit("givemapstyle", thisItem)
        }
      }
    },
    givemapstyle(e) {
      // идёт выборка элементов и присвоение временного i, у всех эллементов по i убирается активный класс (стиль, который красит его в синий цвет)
      // после выборки элементов и разделения их на объекты, вычисляется тот, по которому был клик. Создаётся переменная thisItemId, которой присваивается значение id элемента, по которому кликнули. Его передаю в родительский компонент. Кликнутому элементу добавляется активный класс для стилей
      let styleItem = document.querySelectorAll('.map_slider_item')
      
      for(let i = 0; i < styleItem.length; i++ ) {
        styleItem[i].classList.remove('map_slider_active')

        const thisItem = e.target

        thisItem.classList.add('map_slider_active')
      }
    },
  },
}
</script>