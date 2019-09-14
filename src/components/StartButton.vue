<template>
  <div>
    <button class="StartButton">{{title}}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class StartButton extends Vue {
  @Prop({ default: "Select" }) title!: string;
}
</script>

<style lang="scss" scoped>
.StartButton {
  //   background-color: rgb(82, 17, 82);
  background-color: transparent;

  padding: 0.8rem 2rem;

  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5) !important;

  border: 1px solid rgb(82, 17, 82);
  border-radius: 25px;

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