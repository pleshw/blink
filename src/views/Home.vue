<template>
  <div class="home">
    <div id="logo-container">
      <div id="logo-eye-container" :class="{'active': isLogoBlinking}">
        <h1>{{ logoEyes }}</h1>
      </div>
      <div id="logo-name-container" :class="{'active': isLogoBlinking}">
        <h1>Blink</h1>
      </div>
    </div>

    <div style=" margin: 5rem 0;">
      <div style="text-align: center;margin: 5rem 0;">
        <img src="@/assets/logo.png" alt srcset />
      </div>

      <h2 v-show="counter > 0">{{counter}}</h2>

      <StartButton
        @click.native="blinkLogoAndRedirect"
        v-show="!(counter > 0)"
        title="Clique aqui para Jogar"
      ></StartButton>

      <StartButton @click.native="blinkLogoAndRedirect" v-show="!(counter > 0)" title="Sobre ..."></StartButton>
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

  emotes: Array<string> = ["(", "v", "3", "#", "p", "D"];

  constructor() {
    super();
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
.StartButton {
  margin: 0.3rem 0 !important;
}

#logo-container {
  display: flex;
  margin: 3rem 0;
  justify-content: center;
  align-items: center;
  text-align: center;

  user-select: none !important;
  color: #555;

  padding: 0.2rem 2rem;

  border-radius: 18px;

  background: orange;
}

#logo-name-container {
  margin-top: 0px;
  transition: all 0.2s ease;
}

#logo-eye-container {
  padding-bottom: 10px !important;
  transition: all 0.2s ease-out;
}

#logo-name-container.active {
  margin-left: -3px;
  // text-transform: lowercase;
}
#logo-name-container.active::first-letter {
  font-size: 36px;
  letter-spacing: 25px;
  transition: all 0.6s ease;
}

#logo-eye-container.active {
  font-size: 16px;
}
</style>

