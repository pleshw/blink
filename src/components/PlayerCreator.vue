<template>
  <div class="row align-bottom player-creator">
    <div
      class="card player-creator-card justify-content-center"
      :class="{'active': player.confirmed}"
    >
      <div class="row justify-content-center">
        <!-- Seta pra esquerda -->
        <img :src="player.picture" class="card-img" alt="..." v-on:click.self="makePlayer" />
        <!-- Seta pra direita -->
      </div>

      <div class="card-body center-align justify-content-center" v-on:click.self="makePlayer">
        <div class="card-title">
          <input
            style="color: white !important; background-color: transparent !important;  "
            class="text-muted"
            :class="{'form-control-plaintext': player.confirmed, 'form-control dashed-input': !player.confirmed}"
            :readonly="player.confirmed"
            v-model="player.name"
            v-on:keyup.enter="makePlayer"
            type="text"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            :tabindex="playerID"
            @blur="makePlayer"
          />
        </div>
        <button
          v-if="!player.confirmed"
          type="button"
          class="btn add-players-button col-3"
          @click="makePlayer"
        >
          <b>+</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

import { Player } from "@/includes/Player.ts";
import { Prop } from "vue-property-decorator";

@Component({})
export default class PlayerCreator extends Vue {
  @Prop({})
  playerID!: number;

  player: Player = new Player();

  @Prop({})
  img!: File;

  constructor() {
    super();
    this.player.name = "@Jogador" + this.playerID;
    this.player.picture = this.img;
    this.player.id = this.playerID;

    if (this.playerID === 1) {
      this.player.confirmed = true;
    }
  }

  @Emit("add-player")
  makePlayer(): Player {
    this.player.confirmed = !this.player.confirmed;

    return this.player;
  }
}
</script>

<style lang="scss">
$base-color: rgba(30, 113, 104, 1);
$sub-font-color: rgba(252, 235, 134, 1);
$card-bg-color: rgba(249, 162, 162, 1);
$active-card-bg-color: rgba(239, 115, 115, 1);

input {
  text-align: center;
  font-weight: bold;
}

.player-creator {
  padding: 0 !important;
}

.player-creator .card {
  max-width: 26vh !important;
}
.form-control-plaintext {
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}

.dashed-input {
  border: 2px dashed white !important;
  border-radius: 6px !important;
  font-size: 12px !important;
}

.player-creator-card {
  background: $card-bg-color !important;
  transition: all 0.4s !important;
  border: none !important;
  border-radius: 9px !important;
  cursor: pointer !important;
  width: 40vh;
}

.player-creator-card.active {
  background: $active-card-bg-color !important;
  border: 1px solid rgba(206, 126, 126, 1) !important;
}

// .player-creator-card:hover {
//   border: none !important;
//   background-color: $base-color !important;
// }

.player-creator-card .card-img {
  padding: 3.5rem !important;
  border-radius: 100vh;
  width: 12.5rem;
  height: 12.5rem;
}

.add-players-button {
  border: 0.09rem solid white !important;
  width: 6rem !important;
  height: 2rem !important;
  padding: 0.2rem !important;
  color: $sub-font-color !important;
  font-weight: bold !important;
  text-align: center !important;
  line-height: 100% !important;
}

.add-players-button.active {
  border: none !important;
  min-width: 2.7rem;
  transform: rotateZ(45deg) !important;
}

.add-players-button:focus,
.add-players-button.active:focus,
.add-players-button.active:active,
.add-players-button.btn.active:focus {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
}

.add-players-form {
  border-radius: 0 !important;
  transition: all 2s !important;
}

.img-file-field {
  padding: 5rem;
}

.collapse {
  transition: all 2s !important;
}

.collapse.collapsing {
  transition: all 2s !important;
}

.collapse.show {
  transition: all 2s !important;
}
</style>