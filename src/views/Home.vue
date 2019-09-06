<template>
  <div class="home">
    <div style="text-align: center;">
      <h1>Bem vindo ao</h1>
      <div id="logo-container">
        <div id="logo-eye-container" :class="{'active': isLogoBlinking}">
          <h1>{{ logoEyes }}</h1>
        </div>
        <div id="logo-name-container" :class="{'active': isLogoBlinking}">
          <h1>Blink</h1>
        </div>
      </div>
    </div>

    <StartButton @click.native="blinkLogoAndRedirect" title="Clique aqui para Jogar"></StartButton>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

// Components
import StartButton from "@/components/StartButton.vue";

@Component({
  components: {
    StartButton
  }
})
export default class Home extends Vue {
  logoEyes: string = ":";
  isLogoBlinking: boolean = false;

  constructor() {
    super();
  }

  redirectToGameMenu({ time = 3 }) {
    setTimeout(() => {
      this.$router.push("menu");
    }, time * 1000);
  }

  blinkLogo(): void {
    if (this.logoEyes == ":") {
      this.logoEyes = ";";
      this.isLogoBlinking = true;
    }
    setTimeout(() => {
      this.logoEyes = ":";
      this.isLogoBlinking = false;
    }, 600);
  }

  blinkLogoAndRedirect(): void {
    this.blinkLogo();
    this.redirectToGameMenu({});
  }
}
</script>

<style lang="scss">
#logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
  transition: all 0.2s ease;
}

#logo-eye-container.active {
  font-size: 16px;
}
</style>

