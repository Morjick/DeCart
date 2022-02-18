<template>
  <div>

    <div 
      v-for="routItem in routItems"
      :key="routItem.id"
      class="count_block" >      
      <button 
      @click.prevent="removerRoutCreater(routItem.id)"
        class="count_block_close">
        <img src="@/assets/sprytes/clear.png" alt="" />
      </button>
      <div class="flex_count">
        <img
          src="@/assets/sprytes/map-marker.png"
          alt=""
          class="flex_block_count_img"
        />
        <input
          class="count_input_text"
          type="text"
          placeholder="Введите название места"
        />
      </div>
      <div class="flex_block_count_block">
        <img
          src="@/assets/sprytes/multi-text.png"
          alt=""
          class="flex_block_count_img"
        />
        <input
          class="count_input_text text_blue"
          type="text"
          placeholder="Введите описание"
        />
      </div>

    </div>

    <div class="btn_block">
      <button  
      class="custom-btn"
      @click.prevent="addRputCreater"
      >+ Добавить маршрут</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      routItems: [{ id: 1 }],
    }
  },
  methods: {
    addRputCreater() {
      const newRoutCreater = {
        id: Date.now()
      }

      this.routItems.push(newRoutCreater)
    },
    removerRoutCreater(id) {
      this.routItems = this.routItems.filter((iRC) => iRC.id !== id) 
    },
  },
}
</script>