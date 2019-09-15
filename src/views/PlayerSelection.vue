<template>
  <div>
    <div class="logo-on-edge" style="text-align: center; ">
      <router-link to="/">
        <h1>{{ logo }}</h1>
      </router-link>
    </div>

    <h1 class="info-title">Adicione os jogadores da sua partida</h1>

    <div class="row add-players-row justify-content-center align-middle">
      <player-creator class="col-2" :playerID="1" @add-player="addPlayerToGame" />

      <player-creator class="col-2" :playerID="2" @add-player="addPlayerToGame" />

      <player-creator class="col-2" :playerID="3" @add-player="addPlayerToGame" />

      <player-creator class="col-2" :playerID="4" @add-player="addPlayerToGame" />

      <player-creator class="col-2" :playerID="5" @add-player="addPlayerToGame" />
    </div>

    <StartButton style="margin-bottom: 0; margin-top: 2rem;" title="Selecionar Módulos >"></StartButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import { Player } from "@/includes/Player.ts";

import StartButton from "@/components/StartButton.vue";

import PlayerCreator from "@/components/PlayerCreator.vue";

@Component({
  components: {
    StartButton,
    PlayerCreator
  }
})
export default class PlayerSelection extends Vue {
  logo: string = ":B";
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

    // console.log(this.players);
  }
}
</script>

<style lang="scss">
$base-color: rgba(30, 113, 104, 1);

a {
  color: $base-color !important;
  outline: none !important;
}

.player-creator {
  margin: 0 0.9rem !important;
}

.logo-on-edge {
  position: absolute;
  top: 3%;
  left: 3%;
}

.add-players-row {
  padding: 2.5rem 0;
  background: rgba(139, 226, 226, 0.71);

  max-width: 160vh;
  height: 26rem;

  border-radius: 14px;
}
</style>