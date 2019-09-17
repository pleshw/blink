<template>
  <div
    class="row container justify-content-center centered"
    style="  background-color: rgba(139, 226, 226, 0.71) !important; border-radius: 15px;   padding: 2rem !important;"
  >
    <div class="row col-3 justify-content-center">
      <div class="col-10 selected-module centered mb-4">
        <h4>{{this.moduloSelecionado.name}}</h4>
      </div>
      <div class="col-12 theme-view mb-4 centered">
        <img :src="selectedModuleImg" class="img-fluid" alt />
      </div>
      <div class="col-10 timer centered" v-if="tarefaAtiva">{{taskSelecionada.time}}s</div>
    </div>

    <div class="col-8 offset-1 row questions container-fluid centered">
      <div class="row col-12">
        <h3 class="col-12 text-left">{{taskSelecionada.title}}</h3>
        <h6 class="col-12 text-right">{{taskSelecionada.description}}</h6>
      </div>

      <div class="row col-6">
        <div
          class="col centered"
          v-for="(jogador, index) in jogadoresSelecionados"
          :class="{'push-2': (index > 0)}"
          v-bind:key="index"
        >
          <img :src="jogador.picture" class="img-fluid player-exibit" alt />
        </div>
      </div>

      <StartButton
        class="col-12"
        @click.native="redirectToGameMenu"
        v-show="!(counter > 0)"
        title="Entendi"
      ></StartButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { Player } from "@/includes/Player.ts";
import { Task } from "@/includes/Task.ts";
import { Module } from "@/includes/Module.ts";
import { GameManager } from "@/includes/GameManager.ts";

import StartButton from "@/components/StartButton.vue";

@Component({
  components: {
    StartButton
  }
})
export default class Game extends Vue {
  GameManager!: GameManager;

  modules!: Set<Module>;
  players!: Map<number, Player>;

  moduloSelecionado!: Module;
  taskSelecionada: Task | null = null;

  jogadoresSelecionados!: Player[];

  sortingGif: File = require("@/assets/randomizing-questions.gif");
  teatroImg: File = require("@/assets/modulo-teatro-cores.png");
  artesImg: File = require("@/assets/modulo-artes-cores.png");
  geralImg: File = require("@/assets/modulo-geral-cores.png");

  constructor() {
    super();

    this.GameManager = this.$GameManager;
    this.modules = this.GameManager.modules;
    this.players = this.GameManager.players;
    this.moduloSelecionado = this.GameManager.getRandomModule();
    this.taskSelecionada = this.moduloSelecionado.useRandomTask();

    this.jogadoresSelecionados = this.GameManager.getEnoughPlayers(
      this.taskSelecionada.players
    );
  }

  get tarefaAtiva(): boolean {
    return this.moduloSelecionado !== null;
  }

  get selectedModuleImg(): File {
    switch (this.moduloSelecionado.name) {
      case "Teatro":
        return this.teatroImg;
      case "Artes":
        return this.artesImg;
      case "Geral":
        return this.geralImg;
      default:
        return this.sortingGif;
    }
  }
}
</script>

<style lang="scss">
$base-color: rgba(30, 113, 104, 1);
$sub-font-color: rgba(252, 235, 134, 1);
$card-bg-color: rgba(249, 162, 162, 1);
$active-card-bg-color: rgba(239, 115, 115, 1);
$advice-font-color: rgba(209, 90, 90, 1);

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.selected-module {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: 6px;
  background-color: $card-bg-color !important;
}

.player-exibit {
  background-color: lightgrey !important;
  border-radius: 100vh;
}

.selected-module h4 {
  line-height: 1em;
  margin: 0 !important;
  padding: 0.5em 0 !important;
  color: $advice-font-color !important;
}

.theme-view {
  display: flex !important;
  width: 3rem;
  height: 12rem;

  border-radius: 14px;
  align-items: center;
  justify-content: center;
}

.timer {
  width: 100% !important;
  height: 3.6rem;
  background: white;
  border-radius: 14px;

  font-size: 32px;
  transition: all 0.6s;
  color: $advice-font-color !important;
}

.questions {
  width: 100vh;
  height: 80vh;
  background: white;
  border-radius: 14px;
}
</style>