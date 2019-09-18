<template>
  <div>
    <img :src="require('@/assets/waves-game.png')" class="background-wave" alt />
    <div class="row container justify-content-center centered">
      <div class="with-bg container-fluid row centered">
        <div class="row col-3 justify-content-center" style="z-index: 300;">
          <div class="col-10 selected-module centered mb-4">
            <h4>{{this.moduloSelecionado.name}}</h4>
          </div>
          <div class="col-12 theme-view mb-4 centered">
            <img :src="selectedModuleImg" class="img-fluid" alt />
          </div>
          <div class="col-10 timer centered" v-if="tarefaAtiva">{{timeLeft}}</div>
        </div>

        <div class="col-8 offset-1 row questions container-fluid centered" style="z-index: 300;">
          <!-- Desc -->
          <div
            :class="{'on': onTaskDescription, 'off': onTaskExecution}"
            class="desc-screen row container-fluid centered justify-content-center mb-2"
          >
            <div class="row col-12 mb-5 mt-5">
              <h3 class="col-12 text-left">{{tarefaSelecionada.title}}</h3>
              <h6 class="col-12 text-right">{{tarefaSelecionada.description}}</h6>
            </div>

            <div class="row col-5 justify-content-around mb-5">
              <div
                class="col centered row"
                v-for="(jogador, index) in jogadoresSelecionados"
                :class="{'push-2': (index > 0)}"
                v-bind:key="index"
              >
                <img :src="jogador.picture" class="img-fluid player-exibit col-10 mb-2" alt />
                <div class="row">
                  <h4
                    class="col-12 what-perform"
                    v-if="moduloSelecionado.name == 'Teatro'"
                  >{{tarefaSelecionada.correta}}</h4>
                  <h6 class="col-12">{{jogador.name}}</h6>
                </div>
              </div>
            </div>

            <StartButton
              class="col-12 mt-6"
              @click.native="initTask"
              v-show="!(counter > 0)"
              title="Entendi"
            ></StartButton>
          </div>

          <!-- Quest -->
          <div
            :class="{'on': onTaskExecution, 'off': onTaskDescription}"
            class="task-screen row container-fluid centered justify-content-center mb-2"
          >
            <div class="row container-fluid centered justify-content-center mb-4">
              <div
                class="row alternativas col-12"
                v-for="(alternativa, index) in alternativas"
                v-bind:key="index"
              >
                <StartButton
                  class="col-12"
                  @click.native="verificarResposta(index)"
                  :title="alternativa"
                ></StartButton>
              </div>
            </div>
            <div v-if="acertou" class="col-12 texto-correto">Você acertou</div>
            <div v-if="acertou === false" class="col-12 texto-errado">Você errou</div>
            <div v-if="acertou !== null" class="col-12 texto-errado">
              <StartButton class="col-12" :title="'Proximo'" @click.native="novoRound"></StartButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

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
  tarefaSelecionada!: Task;

  jogadoresSelecionados!: Player[];

  onTaskDescription: boolean = true;
  onTaskExecution: boolean = false;

  acertou: boolean | null = null;

  @Watch("tarefaSelecionada", { immediate: true, deep: true }) onEndOfGame(
    val: Module,
    oldVal: Module
  ) {
    if (val.name == "Fim de Jogo") {
      this.$router.push("fim");
    }
  }

  @Watch("timeLeft", { immediate: true, deep: true }) onTimeEnded(
    val: number,
    oldVal: number
  ) {
    if (val == 0) {
      this.onTaskDescription = true;
      this.onTaskExecution = false;

      this.moduloSelecionado = this.GameManager.getRandomModule();
      this.tarefaSelecionada = this.moduloSelecionado.useRandomTask();

      this.jogadoresSelecionados = this.GameManager.getEnoughPlayers(
        this.tarefaSelecionada.players
      );
    }
  }

  // n - 1/2

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
    this.tarefaSelecionada = this.moduloSelecionado.useRandomTask();

    this.jogadoresSelecionados = this.GameManager.getEnoughPlayers(
      this.tarefaSelecionada.players
    );
  }

  novoRound(): void {
    this.onTaskDescription = true;
    this.onTaskExecution = false;

    this.moduloSelecionado = this.GameManager.getRandomModule();
    this.tarefaSelecionada = this.moduloSelecionado.useRandomTask();

    this.acertou = null;
  }

  get tarefaAtiva(): boolean {
    return this.moduloSelecionado !== null;
  }

  get timeLeft(): number {
    return this.tarefaSelecionada.counter;
  }

  get timeOver(): boolean {
    return this.tarefaSelecionada.counter == 0;
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

  get alternativas(): string {
    return this.tarefaSelecionada.alternativas;
  }

  initTask(): void {
    this.onTaskDescription = false;
    this.onTaskExecution = true;
    this.tarefaSelecionada.init();
  }

  verificarResposta(alternativa: number) {
    console.log(alternativa);

    if (this.tarefaSelecionada.verificarResposta(alternativa) == "correta") {
      this.acertou = true;
      console.log("acertou");
    } else {
      this.acertou = false;
      console.log("errou");
    }
  }
}
</script>

<style lang="scss">
$acertou: rgba(137, 219, 137, 1);
$errou: rgba(214, 56, 56, 1);

$base-color: rgba(30, 113, 104, 1);
$sub-font-color: rgba(252, 235, 134, 1);
$card-bg-color: rgba(249, 162, 162, 1);
$active-card-bg-color: rgba(239, 115, 115, 1);
$advice-font-color: rgba(209, 90, 90, 1);

.correto {
  background-color: $acertou !important;
}

.errado {
  background-color: $errou !important;
}

.texto-correto {
  color: $acertou !important;
}

.texto-errado {
  color: $errou !important;
}

.task-screen,
.desc-screen {
  transition: all 1s;
}

.task-screen.on,
.desc-screen.on {
  display: flex;
  transition: all 1s;
}

.task-screen.off,
.desc-screen.off {
  display: none !important;
  transition: all 1s;
}

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
  border-radius: 14px !important;
  background-color: $card-bg-color !important;
}

.player-exibit {
  background-color: $card-bg-color !important;
  border-radius: 100vh;
}

.selected-module {
  height: 3.5em !important;
}

.selected-module h4 {
  line-height: 1em;
  margin: 0 !important;
  padding: 0 0 !important;
  color: white !important;
  text-transform: uppercase;
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

.with-bg {
  background-color: rgba(139, 226, 226, 0.71) !important;
  z-index: 300 !important;
  border-radius: 15px;
  padding: 2rem !important;
}

.what-perform {
  text-transform: capitalize;
}
</style>