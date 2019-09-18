<template>
  <div class="row justify-content-center">
    <img :src="require('@/assets/waves-bottom-modules.png')" class="background-wave mod-wave" alt />
    <div class="container" style="z-index: 300;">
      <div class="logo-on-edge" style="text-align: center; max-width: 4.8rem !important; ">
        <router-link to="/">
          <img src="@/assets/logo-sub-rosa.png" class="img-fluid" />
        </router-link>
      </div>
      <div style="z-index: 300;" class="row justify-content-center">
        <div
          class="info-title d-flex justify-content-start col-8 align-middle mt-4"
          style="z-index: 300;"
        >
          <info-markers style="padding: 0 !important;" :step="2" :length="2"></info-markers>
        </div>
        <div class="row justify-content-center">
          <div
            class="module col-2 align-middle"
            v-for="index in 8"
            v-bind:key="index"
            :class="{'active': $GameManager.modules.has(allModules[index-1])}"
            v-on:click="addModule(index-1)"
            @mouseover="selectModule(index-1)"
          >
            <img
              :src="(index < allModules.length+1)? allModules[index-1].img : notReady.img "
              class="img-fluid col module-img"
              :class="{'module-not-ready': index > allModules.length}"
            />
          </div>
        </div>

        <div
          class="row mt-4 col-6 justify-content-center info-module text-center align-middle center-align"
        >
          <div class="col-12 align-middle">
            <h6>
              <b>{{hoveredModuleDesc}}</b>
            </h6>
          </div>
        </div>

        <div class="row col-12 justify-content-center">
          <StartButton
            class
            @click.native="redirectToPreloader"
            style="margin-bottom: 0; margin-top: 2rem; z-index: 300;"
            title="Começar"
          ></StartButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Module, AllModules, NotReady } from "@/includes/GameModules.ts";

// Components
import InfoMarkers from "@/components/InfoMarkers.vue";
import StartButton from "@/components/StartButton.vue";

@Component({
  components: {
    StartButton,
    InfoMarkers
  }
})
export default class ModSelection extends Vue {
  allModules: Array<Module> = AllModules;
  notReady: Module = NotReady;

  hoveredModule: Module = NotReady;

  hoveredModuleDesc: string = "";

  addedTasks: number = 0;

  constructor() {
    super();
  }

  addModule(index: number): void {
    if (index >= this.allModules.length) return;
    if (this.$GameManager.modules.has(this.allModules[index])) {
      this.$GameManager.modules.delete(this.allModules[index]);
      this.addedTasks -= 1;
      return;
    }
    this.$GameManager.modules.add(this.allModules[index]);
    this.addedTasks += 1;
    // console.log(this.$GameManager);
  }

  addAllModules(): void {
    this.allModules.forEach(element => {
      this.$GameManager.modules.add(element);
    });
  }

  selectModule(index: number): void {
    if (index < this.allModules.length) {
      this.hoveredModule = this.allModules[index];
    } else {
      this.hoveredModule = this.notReady;
    }

    this.hoveredModuleDesc = this.hoveredModule.description;
  }

  redirectToPreloader(): void {
    if (this.addedTasks > 0) this.$router.replace("game");
    return;
  }

  unselectModule(): void {
    this.hoveredModuleDesc = "";
  }
}
</script>

<style lang="scss">
$base-color: rgba(30, 113, 104, 1);
$sub-font-color: rgba(252, 235, 134, 1);
$card-bg-color: rgba(249, 162, 162, 1);
$active-card-bg-color: rgba(239, 115, 115, 1);

.mod-wave {
  max-width: 105vw !important;
  width: 104vw !important;
}

.module {
  display: flex;
  width: 3rem !important;
  height: 7rem !important;
  background-color: $card-bg-color;
  margin: 1.2rem;
  border-radius: 14px;
  padding: 0 !important;
  cursor: pointer;
  transition: border 0.2s;
  align-items: center;
  justify-content: center;
}

.module.active {
  border: 0.3rem solid $card-bg-color !important;
  background-color: $active-card-bg-color !important;
}

.module:hover {
  background-color: $active-card-bg-color !important;
}

.module-img {
  margin: 0.33333rem 0 !important;
  height: auto !important;
  max-height: 6.8rem !important;
  max-width: 100% !important;
  transition: all 0.3s ease-in-out;
}

.module-not-ready {
  margin: 0.33333rem 0 !important;
  height: auto !important;

  max-width: 60% !important;
  transition: all 0.3s ease-in-out;
}

.module.active .module-img {
  margin: 0.6rem 0 !important;
  transition: all 0.3s ease-in-out;
  width: 100% !important;
}

.info-module {
  display: flex;
  background-color: rgba(139, 226, 226, 0.71) !important;
  height: 6rem !important;
  width: 9rem !important;
  align-items: center;
  justify-content: center;
  border-radius: 14px !important;
}

.info-module h6 {
  max-height: 55px;
  font-style: oblique !important;
  text-shadow: 1px 1px 1px rgba(221, 221, 221, 0.2);
}
</style>