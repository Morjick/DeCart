<template>
  <div class="sidebar_inner">
    <div class="steps-container">
      <div class="steps">
        <div id="firstStepNav" class="step activeStep">
          <span>1</span>
        </div>
        <div id="secondStepNav" class="step">
          <span>2</span>
        </div>
        <div id="thirdStepNav" class="step">
          <span>3</span>
        </div>
      </div>
      <div v-if="step >= 2" class="sidebar_tools">
        <button @click="backStep" class="cancaler">
          <img src="@/assets/sprytes/cancel.png" alt="" />
        </button>
        <button class="rewriter">
          <img src="@/assets/sprytes/rewrite.png" alt="" />
        </button>
      </div>
    </div>

    <!-- FIRST STEP -->
    <section v-if="step == 1">
      <form>
        <div class="sidebar_subtitle semi">Выбор локации:</div>

        <div class="input_search_block">
          <div class="search_sidebar">
            <img src="@/assets/sprytes/search.png" alt="" class="searc_img" />
            <input
              type="text"
              class="searc_input"
              placeholder="найдите своё любимое место в мире"
            />
            <div class="searc_drop">
              <ul>
                <li class="searc_drop_item">Itali</li>
                <li class="searc_drop_item">Itali, Греция</li>
                <li class="searc_drop_item">
                  Centre Commetcial Italie Deux Avenue d’It...
                </li>
                <li class="searc_drop_item">Ничего не нашли</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="small">Или попробуйте</div>

        <div class="popular_cites">
          <button @click.prevent="addActiveBtn" class="conunter newVar">
            Москва
          </button>
          <button @click.prevent="addActiveBtn" class="conunter newVar">
            Санкт-Петербург
          </button>
          <button @click.prevent="addActiveBtn" class="conunter newVar">
            Новосибирск
          </button>
          <button @click.prevent="addActiveBtn" class="conunter newVar">
            Екатерингбугр
          </button>
          <button @click.prevent="addActiveBtn" class="conunter newVar">
            Калининград
          </button>

          <div class="center">
            <button class="primery-conunter">Случайная карта</button>
          </div>
        </div>
      </form>
    </section>

    <!-- FIRST STEP END -->

    <!-- SECOND STEP -->
    <section v-if="step == 2">
      <form>
        <div class="sidebar_subtitle semi">Настройка карты:</div>

        <div class="editor_sidebar_block">
          <p>Формат:</p>

          <div class="editor_flexer">
            <label class="format_block labVar">
              <input name="formVar" type="radio" />
              <div @click="addActiveLabel" class="formVarDiv">
                Прямоугольник
              </div>
            </label>
            <label class="format_block labVar">
              <input name="formVar" type="radio" />
              <div @click="addActiveLabel" class="formVarDiv">Квадрат</div>
            </label>
          </div>

          <p>Размер постера</p>
          <div class="editor_flexer">
            <label class="format_block">
              <input name="formatSize" id="formatA4" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А4</div>
            </label>
            <label class="format_block">
              <input name="formatSize" id="formatA3" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А3</div>
            </label>
            <label class="format_block">
              <input name="formatSize" id="formatA2" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А2</div>
            </label>
            <label class="format_block">
              <input name="formatSize" id="formatA1" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А1</div>
            </label>
          </div>

          <FormOrintation />

          <div class="flexer">
            <p>Поля</p>

            <label class="checkbox">
              <input id="poleDone" type="checkbox" v-model="showFields" />
              <div class="chek_item"></div>
            </label>
          </div>

          <RangeFields v-if="showFields" />

          <div class="pole_input_block"></div>

          <div class="flexer">
            <p>Подпись</p>

            <label class="checkbox">
              <input class="vizible" type="checkbox" v-model="showSignatures" />
              <div class="chek_item"></div>
            </label>
          </div>

          <FormSignature v-if="showSignatures" />

          <div class="flexer">
            <p>Иконки</p>

            <label class="checkbox">
              <input class="vizible" type="checkbox" v-model="showIcons" />
              <div class="chek_item"></div>
            </label>
          </div>

          <FromIcon v-if="showIcons" />

          <div class="flexer">
            <p>Маршрут</p>
            <input id="smarshrutInput" type="checkbox" />

            <label class="checkbox">
              <input class="vizible" type="checkbox" v-model="showRouts" />
              <div class="chek_item"></div>
            </label>
          </div>

          <FormRout v-if="showRouts" />

          <div class="flexer">
            <p>Фото</p>

            <label class="checkbox">
              <input class="vizible" type="checkbox" v-model="showPhoto" />
              <div class="chek_item"></div>
            </label>
          </div>

          <FromPhoto v-if="showPhoto" />
        </div>
      </form>
    </section>

    <!-- SECOND STEP END -->

    <!-- THIRD STEP -->
    <section v-if="step == 3">
      <form>
        <div class="sidebar_subtitle semi">Настройки постера:</div>
        <div class="editor_sidebar_block">
          <p>Размер постера</p>
          <div class="editor_flexer">
            <label class="format_block">
              <input name="formatSize" id="formatA4" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А4</div>
            </label>
            <label class="format_block">
              <input name="formatSize" id="formatA3" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А3</div>
            </label>
            <label class="format_block">
              <input name="formatSize" id="formatA2" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А2</div>
            </label>
            <label class="format_block">
              <input name="formatSize" id="formatA1" type="radio" />
              <div @click="addActiveSize" class="formSizeDiv">А1</div>
            </label>
          </div>

          <FormOrintation />

          <div class="flexer">
            <p>Обрезка по краям</p>
            <label class="checkbox">
              <input class="vizible" type="checkbox" />
              <div class="chek_item"></div>
            </label>
          </div>

          <p>Способ печати</p>
          <div class="editor_flexer">
            <label class="format_block">
              <input name="formIm" type="radio" />
              <div @click="addActiveMat" class="formVarMat">Бумага</div>
            </label>
            <label class="format_block">
              <input name="formIm" type="radio" />
              <div @click="addActiveMat" class="formVarMat">Плёнка</div>
            </label>
            <label class="format_block">
              <input name="formIm" type="radio" />
              <div @click="addActiveMat" class="formVarMat">Без печати</div>
            </label>
          </div>
        </div>
      </form>
    </section>

    <div v-if="this.step < 3" class="sidebar_btn_block">
      <button @click.prevent="nextStep" class="primery-btn">Далее</button>
    </div>

    <div
      v-if="this.step == 3 && this.generate == false"
      class="sidebar_btn_block"
    >
      <button @click.prevent="createPoster" class="primery-btn create-btn">
        Создать
      </button>
    </div>

    <div v-if="this.generate == true" class="sidebar_btn_block">
      <p>Генерирую файл, подождите...</p>
    </div>
  </div>
</template>

<script>
// components
import RangeFields from "./layouts/rengeFields";
import FormSignature from "./layouts/formSignature";
import FromIcon from "./layouts/formIcon";
import FormRout from "./layouts/formRout";
import FromPhoto from "./layouts/formPhoto";
import FormOrintation from "./layouts/orintation.component";

// tools
import axios from "axios";
// import {jsPDF} from 'jspdf'
// import mapboxgl from 'mapbox-gl'
// import * as htmlToImage from 'html-to-image'
// import {toPng} from 'html-to-image'
// model

export default {
  name: "Sidebar",
  data() {
    return {
      // заданы шаги для отображение различных секций и стилизации пагинации
      step: 1,
      totalStep: 3,

      // компоненты для показа дополнительных полей: поля, иконки, фото, маршрут и так далее
      showFields: false,
      showSignatures: false,
      showIcons: false,
      showRouts: false,
      showPhoto: false,

      // стиль карты, приходит пропсой из родительского компонента
      mapStyle: this.posterStyle,

      generate: false,

      posterArray: {
        style: null,
        center: null,
        zoom: null,
        containerWidth: 3508,
        containerHeight: 2480
      },

      server: "http://localhost:80",
      unik: ""
    };
  },
  props: ["posterStyle"],
  methods: {
    createPosterArray(thisItem, tArray) {
      this.posterArray.style = thisItem;
      this.posterArray.center = tArray;
    },
    async createPoster() {
      // console.log('posterArray',  this.posterArray)
      this.generate = true;
      const thi = this;

      this.$mapboxgl.accessToken = "pk.eyJ1IjoibW9yamljayIsImEiOiJja3NidWF0ajUwYWk1MndwZmk3c290czhyIn0.-QX4ZH14vyOVyO-2cCPh_w"

      const serverUri = this.server + "/api/poster/";
      axios({
        method: "post",
        url: serverUri,
        responseType: "stream",
        data: this.posterArray,
        body: this.posterArray,
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(function(req) {
          let posterInfo = req.data.body
          renderMapForPng(posterInfo)
        })
        .catch(function(res) {
          console.log("res:", res)
        })

      async function renderMapForPng(posterInfo) {
        const body = document.querySelector("body")

        const container = document.createElement("div")
        container.className = "hiden-map"
        container.id = "hidenMap"

        body.appendChild(container)
        

        renderMap(posterInfo)
      }
        function renderMap(posterInfo) {
          let lng = posterInfo.center.lng
          let lat = posterInfo.center.lat
          let zoom = Number(posterInfo.zoom)

          let filename

          thi.$mapboxgl.accessToken = "pk.eyJ1IjoibW9yamljayIsImEiOiJja3NidWF0ajUwYWk1MndwZmk3c290czhyIn0.-QX4ZH14vyOVyO-2cCPh_w"

          var map = new thi.$mapboxgl.Map({
            container: "hidenMap",
            style: "mapbox://styles/mapbox/" + posterInfo.styler,
            center: [lng, lat],
            zoom: zoom + 1,
            preserveDrawingBuffer: true,
            interactive: false,
            fadeDuration: 0,
            attributionControl: false,
          })

          var dpi = 300
          Object.defineProperty(window, "devicePixelRatio", {
            get: function() { return dpi / 96 }
          })

          map.on("idle", function() {
            var content = map.getCanvas().toDataURL("image/png")
            var data = content.replace(/^data:([A-Za-z-+/]+);base64,/, "")
            var img = Buffer.from(data, "base64")
            let nana = JSON.stringify(img)

            let loaded = map.loaded()
            if (loaded) {
              setTimeout(Pos, 200)
            }

            async function Pos() {
              await axios({
                method: "post",
                url: "http://localhost:80/api/image",
                responseType: "stream",
                data: nana,
                body: nana,
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(res => {
                filename = res.data.rout;
                console.log("filename:", filename)

                DownloadPoster(filename)
              })
            }
          })
        }

        async function DownloadPoster(filename) {
          await axios({
            method: "get",
            url: "http://localhost:80/download/:" + filename,
            responseType: "blob",
            headers: {
              Accept: "application/pdf",
              "Content-Type": "application/pdf"
            },
            body: filename
          }).then(req => {
            console.log("Donwloading...", req)

            let downloadHelper = document.createElement("a")

            downloadHelper.target = "_black"
            downloadHelper.href = ("href", "http://localhost:80/download/:" + filename)
            downloadHelper.click()
            downloadHelper.remove()

            generateOff()
          })
        }

      function generateOff() {
        thi.generate = false;
      }
    },
    reworkCoordinate(lng, ltd) {
      // принимается ширина и долгота и передаётся в родительский функцией со значением массива
      let timesCoordinate = [lng, ltd];
      this.$emit("click", timesCoordinate);
    },
    nextStep() {
      // увеличивает пагинацию на 1 шаг
      this.step++;
      this.stepsNav();
    },
    firstStep() {
      // временная функция замыкания, онулирует шаги, возвращает к 1 и распределяет классы пагинации для стилей
      this.step = 1;

      const secondStepNav = document.getElementById("secondStepNav");
      const thirdStepNav = document.getElementById("thirdStepNav");
      secondStepNav.style.border = "3px solid #B4B3BD";
      thirdStepNav.style.border = "3px solid #B4B3BD";

      secondStepNav.classList.remove("activeStep");
      thirdStepNav.classList.remove("activeStep");
    },
    stepsNav() {
      // определение текущего шага, отображение секций в зависимости от текущего и выдача классов для стилизацити
      const secondStepNav = document.getElementById("secondStepNav");
      const thirdStepNav = document.getElementById("thirdStepNav");

      if (this.step >= 2) {
        secondStepNav.style.border = "3px solid #1B41C8";
        secondStepNav.classList.add("activeStep");
      }
      if (this.step >= 3) {
        thirdStepNav.style.border = "3px solid #1B41C8";
        thirdStepNav.classList.add("activeStep");
      }
    },
    addActiveBtn(e) {
      // удаление классов у всех элементов и выдача кликнутому классв для стилей
      const allBtn = document.querySelectorAll(".conunter");

      allBtn.forEach(elem => {
        elem.classList.remove("avtiveCityBtn");
        console.log(elem);
      });

      e.target.classList.add("avtiveCityBtn");
    },
    addActiveLabel(e) {
      // выдача класса для стилей кликнотому input со значением формы (квадрат/прямоугольник)
      const allDivsForm = document.querySelectorAll(".formVarDiv");

      allDivsForm.forEach(elem => {
        elem.classList.remove("labelActive");
      });

      e.target.classList.add("labelActive");
    },
    addActiveSize(e) {
      // выдача класса для стилей кликнотому input со значением размера
      const allDivsSize = document.querySelectorAll(".formSizeDiv");
      allDivsSize.forEach(elem => {
        elem.classList.remove("labelActive");
      });

      e.target.classList.add("labelActive");
    },

    addActiveMat(e) {
      const allMatDivs = document.querySelectorAll(".formVarMat");

      allMatDivs.forEach(elem => {
        elem.classList.remove("divActive");
      });

      e.target.classList.add("divActive");
    },
    backStep() {
      this.step--;
    },
  },
  components: {
    RangeFields,
    FormSignature,
    FormRout,
    FromIcon,
    FromPhoto,
    FormOrintation
  },
}
</script>