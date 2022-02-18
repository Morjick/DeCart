<template>
  <div class="sungnature_block">
    <div class="conunter">
      <input type="text" placeholder="Введите заголовок" />
    </div>
    <div class="conunter">
      <input type="text" placeholder="Введите подзаголовок" />
    </div>
    <div class="conunter">
      <input type="text" placeholder="37.426*N / 122.169*W " />
    </div>

    <div class="conunter">
      <div class="flexer">
        <img src="@/assets/sprytes/arrow-down.png" alt="" class="conter_img" />
        <select name="Выберите стиль" id="styleSignatureSelect">
          <option value="">Выберите стиль подписи</option>
          <option value="">Стиль 1</option>
          <option value="">Стиль 2</option>
          <option value="">Стиль 3</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>