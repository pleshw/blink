<template>
  <div>
    <button class="StartButton">{{title}}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  @Prop({ default: "Select" }) title!: string;
}
</script>

<style lang="scss" scoped>
.StartButton {
  //   background-color: rgb(82, 17, 82);
  background-color: transparent;

  padding: 1rem 2rem;

  border: 0.09rem solid rgb(82, 17, 82);
  border-radius: 0.1rem;

  //   color: white;
  color: rgb(82, 17, 82);

  font-style: oblique;
  font-weight: 600;
  font-size: 0.9rem;

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: 0 !important;
  }
}
</style>