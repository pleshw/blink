<template>
  <div class="home justify-content-center row">
    <div id="logo-container" class="center-align">
      <img src="@/assets/logo.png" class="img-fluid" />
    </div>

    <div class="col-12" style="margin-top:5rem;">
      <div style="text-align: center;">
        <!-- <img src="@/assets/logo.png" alt srcset /> -->
      </div>

      <h3 class="counter" v-show="counter > 0">{{counter}}</h3>

      <StartButton
        style="margin-top: 6.2rem !important;"
        @click.native="blinkLogoAndRedirect"
        v-show="!(counter > 0)"
        title="Começar"
      ></StartButton>

      <StartButton
        style="margin: 0.9rem 0 !important;"
        @click.native="blinkLogoAndRedirect"
        v-show="!(counter > 0)"
        title="Sobre ..."
      ></StartButton>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

// Components
import StartButton from "@/components/StartButton.vue";

// Includes
import { GameManager } from "@/includes/GameManager.ts";
import { Mimica } from "@/includes/GameTasks.ts";

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
  }

  redirectToGameMenuWithCallback({ time = 3 }) {
    this.counter = time;
    let interval = setInterval(() => {
      if (--this.counter === 0) {
        this.$router.push("jogadores");
        clearInterval(interval);
      }
    }, 1000);
  }

  redirectToGameMenu({ time = 3 }) {
    this.counter = time;
    let interval = setInterval(() => {
      if (--this.counter === 0) {
        this.$router.push("jogadores");
        clearInterval(interval);
      }
    }, 1000);
  }

  blinkLogo(): void {
    setTimeout(() => {
      if (this.logoEyes == ":") {
        this.isLogoBlinking = true;
      }
    }, 1200);

    setTimeout(() => {
      this.logoEyes = ";";
    }, 2100);

    setTimeout(() => {
      this.logoEyes = ":";
      // this.isLogoBlinking = false;
    }, 2600);
  }

  blinkLogoAndRedirect(): void {
    this.blinkLogo();
    this.redirectToGameMenu({});
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
</style>

