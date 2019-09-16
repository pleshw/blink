<template>
  <div class="row justify-content-center container">
    <div
      class="info-title d-flex justify-content-start col-6 align-middle mt-4"
      style="z-index: 300;"
    >
      <info-markers style="padding: 0 !important;" :step="2" :length="2"></info-markers>
    </div>
    <div class="row justify-content-center">
      <div class="module col-2" v-for="index in 8" v-bind:key="index"></div>
    </div>

    <div class="row mt-4 col-6 justify-content-center info-module"></div>

    <div class="row col-12 justify-content-center">
      <StartButton
        class
        @click.native="{}"
        style="margin-bottom: 0; margin-top: 2rem; z-index: 300;"
        title="Começar"
      ></StartButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

// Components
import InfoMarkers from "@/components/InfoMarkers.vue";
import StartButton from "@/components/StartButton.vue";
import { Teatro } from "@/includes/GameModules";

@Component({
  components: {
    StartButton,
    InfoMarkers
  }
})
export default class Home extends Vue {
  constructor() {
    super();

    console.log(Teatro);
  }
}
</script>

<style lang="scss">
$base-color: rgba(30, 113, 104, 1);
$sub-font-color: rgba(252, 235, 134, 1);
$card-bg-color: rgba(249, 162, 162, 1);
$active-card-bg-color: rgba(239, 115, 115, 1);

.module {
  width: 3rem !important;
  height: 7rem !important;
  background-color: $active-card-bg-color;
  margin: 1.2rem;
  border-radius: 14px;
  padding: 0 !important;
}

.info-module {
  background-color: rgba(139, 226, 226, 0.71) !important;
  height: 6rem !important;
}
</style>