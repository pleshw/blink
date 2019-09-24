<template>
  <div class="row justify-content-center container-fluid">
    <img :src="require('@/assets/waves-bottom-players.png')" class="background-wave" alt />


    <div class="col-11 how-to-row" style=" z-index: 300;">
      <img class="img-fluid" :src="require('@/assets/how-to.png')" />
    </div>

    <div class="row col-12 justify-content-center">
      <StartButton
        class
        @click.native="redirectToPlayerSelection"
        style="margin-bottom: 0; margin-top: 1rem; z-index: 300;"
        title="Vamos lá!"
      ></StartButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import StartButton from "@/components/StartButton.vue";

@Component({
  components: {
    StartButton
  }
})
export default tags Tutorial extends Vue {

  constructor() {
    super();
  }

  redirectToPlayerSelection() {
    this.$router.push("seleção-de-jogadores");
  }
}
</script>

<style lang="scss">
.how-to-row {
  background-color: rgba(139, 226, 226, 0.71);
  padding: 2rem 9rem !important;
  border-radius: 14px;
}
</style>