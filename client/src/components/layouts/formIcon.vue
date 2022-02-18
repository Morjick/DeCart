<template>
  <div>
    <div v-for="iconItem in iconItems" :key="iconItem.id" class="count_block">
      <button
        @click.prevent="removerIconCreater(iconItem.id)"
        class="count_block_close"
      >
        <img src="@/assets/sprytes/clear.png" alt="" />
      </button>
      <div class="flex_count">
        <img
          src="@/assets/sprytes/home.png"
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
      <button @click.prevent="addIconCreater" class="custom-btn">
        + Добавить точку
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconItems: [{ id: 1 }],
    }
  },
  methods: {
    addIconCreater() {
      const newIconCreater = {
        id: Date.now(),
      }

      this.iconItems.push(newIconCreater)
    },
    removerIconCreater(id) {
      this.iconItems = this.iconItems.filter((iC) => iC.id !== id)
    },
  },
}
</script>