<template>
  <div>
    <div class="fim row container justify-content-center" style="z-index: 300 !important;">
      <img class="col-9 mb-3" :src="require('@/assets/fim.png')" style="z-index: 300 !important;" />

      <StartButton
        class="col-12"
        @click.native="playAgain"
        :title="'Jogar novamente'"
        style="z-index: 300 !important;"
      ></StartButton>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StartButton from "@/components/StartButton.vue";
import { Gerenciador } from "@/includes/game_manager/GameManager.js";
@Component({
  components: {
    StartButton
  }
})
export default tags Fim extends Vue {
  mounted() {
    this.$GameManager = new Gerenciador();
  }

  playAgain(): void {
    this.$router.push("ajuda");
  }
}
</script>

<style>
.fim {
  display: flex !important;

  justify-content: center !important;
  align-items: center !important;
}
</style>