<template>
  <div>
    <button :style="{backgroundColor: bg, boxShadow: shadow}" class="StartButton">{{title}}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default tags StartButton extends Vue {
  @Prop({ default: "Select" }) title!: string;

  @Prop({ default: "rgba(255, 108, 108, 1)" }) bg!: string;

  @Prop({ default: "3px 3px 1px rgba(221, 95, 95, 1) !important" })
  shadow!: string;
}
</script>

<style lang="scss" scoped>
.StartButton {
  //   background-color: rgb(82, 17, 82);
  // background-color: rgba(255, 108, 108, 1);

  padding: 0.6rem 3rem;

  // box-shadow: 3px 3px 1px rgba(221, 95, 95, 1) !important;

  border: 1px solid rgba(221, 95, 95, 1) !important;
  border-radius: 25px;

  //   color: white;
  color: #eee;

  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: 0 !important;
  }
}
</style>