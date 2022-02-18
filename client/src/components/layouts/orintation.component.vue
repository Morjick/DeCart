<template>
  <div>
    <p>Ориентация</p>
    <div class="editor_flexer">
      <label class="format_block">
        <input
          id="formatOrientationVertical"
          name="formOrientation"
          type="radio"
        />
        <div
          @click="addActiveOrintation"
          class="formVarOrintation"
        > <span class="vertical_span"></span> </div>
      </label>

      <label class="format_block">
        <input
          id="formatOrientationHorizont"
          name="formOrientation"
          type="radio"
        />
        <div
          @click="addActiveOrintation"
          class=" formVarOrintation"
        > <span class="horisontal_span"></span></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addActiveOrintation(e) {
      const allDivOrintation = document.querySelectorAll('.formVarOrintation')

      allDivOrintation.forEach((elem) => {
        elem.classList.remove('divActive')
      }) 

      e.target.classList.add('divActive')
    },
  }
}
</script>