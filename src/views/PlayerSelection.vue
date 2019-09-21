<template>
  <div class="home justify-content-center row">
    <img :src="require('@/assets/waves-bottom-players.png')" class="background-wave" alt />
    <div style="z-index: 300;">
      <div class="logo-on-edge" style="text-align: center; max-width: 4.8rem !important; ">
        <router-link to="/">
          <img src="@/assets/logo-sub-azul.png" class="img-fluid" />
        </router-link>
      </div>

      <div
        class="info-title d-flex justify-content-start mb-1 p2 align-middle"
        style="z-index: 300;"
      >
        <info-markers style="padding: 0 !important;" :step="1" :length="2"></info-markers>
        <div
          style="padding: 0 !important; line-height: 1;"
          class="col-6 align-middle align-items-center h-100"
        >Adicione os jogadores da sua partida</div>
      </div>

      <div class="row add-players-row justify-content-center align-middle" style="z-index: 300;">
        <player-creator
          class="col-2"
          :playerID="1"
          :img="require('@/assets/user-triangle.png')"
          @add-player="addPlayerToGame"
        />

        <player-creator
          class="col-2"
          :playerID="2"
          :img="require('@/assets/user-circle.png')"
          @add-player="addPlayerToGame"
        />

        <player-creator
          class="col-2"
          :playerID="3"
          :img="require('@/assets/user-reverse-triangle.png')"
          @add-player="addPlayerToGame"
        />

        <player-creator
          class="col-2"
          :playerID="4"
          :img="require('@/assets/user-square.png')"
          @add-player="addPlayerToGame"
        />

        <player-creator
          class="col-2"
          :playerID="5"
          :img="require('@/assets/user-half-circle.png')"
          @add-player="addPlayerToGame"
        />

        <StartButton
          @click.native="redirectToModSelection"
          style="margin-bottom: 0; margin-top: 6rem; z-index: 300;"
          title="Próximo"
        ></StartButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

import { Player } from "@/includes/Player.ts";

import InfoMarkers from "@/components/InfoMarkers.vue";
import StartButton from "@/components/StartButton.vue";
import PlayerCreator from "@/components/PlayerCreator.vue";

@Component({
  components: {
    StartButton,
    PlayerCreator,
    InfoMarkers
  }
})
export default class PlayerSelection extends Vue {
  players!: Map<number, Player>;

  constructor() {
    super();
    this.players = new Map<number, Player>();
  }

  addPlayerToGame(p: Player): void {
    if (this.players.get(p.id || 0) == undefined || p.id === 0) {
      this.players.set(p.id || 0, p);
    } else {
      this.players.delete(p.id || 0);
    }
  }

  redirectToModSelection() {
    this.$GameManager.players = this.players;
    this.$router.replace("modulos");
  }
}
</script>

<style lang="scss">
$base-color: rgba(30, 113, 104, 1);
$advice-font-color: rgba(209, 90, 90, 1);

a {
  color: $base-color !important;
  outline: none !important;
}

.info-title {
  text-transform: uppercase !important;
  font-size: 19px;
  color: $advice-font-color;
}

.player-creator {
  margin: 0 0.9rem !important;
}

.logo-on-edge {
  position: absolute;
  top: 3%;
  left: 3%;
}

.logo-on-edge a {
  transition: all 0.3s;
  // &:hover {
  //   transform: skewY(0.17rad);
  //   // transform: skewX(-10deg);
  // }
}

.add-players-row {
  padding: 2.5rem 0;
  background: rgba(139, 226, 226, 0.71);

  max-width: 160vh;
  height: 26rem;

  border-radius: 14px;
}
</style>