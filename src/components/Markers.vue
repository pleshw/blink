<template>
  <div class="info-markers justify-content-start row align-middle align-items-center h-100">
    <div
      class="marker"
      :class="{'highlight': (index <= step)}"
      v-for="index in length"
      :key="index"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Prop } from "vue-property-decorator";

@Component({})
export default class Markers extends Vue {
  @Prop({}) length!: number;
  @Prop({}) step!: number;
}
</script>

<style lang="scss">
.marker {
  width: 18px !important;
  height: 18px !important;
  border-radius: 100vh;
  margin: 0 0.3rem;
  background-color: rgba(139, 226, 226, 1);
}

.marker.highlight {
  background-color: rgba(252, 235, 134, 1);
}
</style>