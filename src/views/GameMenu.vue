<template>
  <div>
    <div style="text-align: center;">
      <h1>{{ logo }}</h1>
      <h2>Menu</h2>
    </div>
    <StartButton title="Iniciar"></StartButton>
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
export default class Home extends Vue {
  logo: string = ":B";
  constructor() {
    super();
  }
}
</script>

