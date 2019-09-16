<template>
  <div class="home justify-content-center row">
    <div id="logo-container" class="center-align">
      <img src="@/assets/logo.png" class="img-fluid" />
    </div>

    <div class="col-12" style="margin-top:5rem;  z-index: 300;">
      <div style="text-align: center;">
        <!-- <img src="@/assets/logo.png" alt srcset /> -->
      </div>

      <h3 class="counter" v-show="counter > 0">{{counter}}</h3>

      <StartButton
        style="margin-top: 6.2rem !important;"
        @click.native="redirectToGameMenu"
        v-show="!(counter > 0)"
        title="Começar"
      ></StartButton>

      <StartButton
        style="margin: 0.9rem 0 !important;"
        @click.native="{}"
        v-show="!(counter > 0)"
        title="Sobre ..."
      ></StartButton>
    </div>

    <img :src="require('@/assets/waves-bottom.png')" class="background-wave" alt />

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

// Components
import StartButton from "@/components/StartButton.vue";

// Includes
import { GameManager } from "@/includes/GameManager.ts";
import { Mimica, Dance } from "@/includes/GameTasks.ts";

Vue.prototype.$GameManager = new GameManager();

@Component({
  components: {
    StartButton
  }
})
export default class Home extends Vue {
  logoEyes: string = ":";
  isLogoBlinking: boolean = false;
  counter: number = 0;

  constructor() {
    super();

    // let m = new Mimica();
    // console.log(m.title);
    // console.log("Você pode ser: " + m.canBe);
    // console.log("Você é: " + m.reallyIs);
    // m.init();

    // this.d = new Dance();
    // console.log(this.d.title);
    // console.log("Você pode ser: " + this.d.canBe);
    // console.log("Você é: " + this.d.reallyIs);
    // d.init();
  }

  redirectToGameMenu() {
    this.$router.push("ajuda");
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");

$sign-color: rgba(249, 128, 128, 1);
$advice-font-color: rgba(209, 90, 90, 1);

.counter {
  color: $advice-font-color;
}

.StartButton {
  margin: 0.3rem 0 !important;
}

#logo-container {
  display: flex;

  font-family: "Varela Round", sans-serif;

  justify-content: center;
  align-items: center;
  text-align: center;

  user-select: none !important;

  color: #555;

  font-size: 26px;

  color: #f2f2f2;

  max-width: 10rem;

  border-radius: 10px;

  background: $sign-color;

  padding: 0 1rem;

  img {
    margin: 0.58rem 0 !important;
  }
}

#logo-name-container {
  transition: all 0.2s ease;
}

#logo-eye-container {
  transition: all 0.2s ease-out;
}

#logo-name-container.active::first-letter {
  letter-spacing: 25px;
  transition: all 0.6s ease;
}

#logo-eye-container.active {
  font-size: 16px;
}

.background-wave {
  display: block !important;
  position: absolute !important;
  max-width: 100% !important;
  height: auto !important;
  left: 0 !important;
  bottom: 0 !important;
  z-index: 2;
}
</style>

