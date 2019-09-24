<template>
  <div id="app" class="align-middle">
    <!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
    <!-- <transition name="slide-fade"></transition> -->
  </div>
</template>


<style lang="scss">
$base-color: rgba(45, 119, 101, 1);
$sub-color: rgba(125, 212, 211, 1);
$sub-sub: rgba(140, 222, 224, 0.4);

$bg-player-selector: rgba(83, 163, 153, 1);
$advice-font-color: rgba(209, 90, 90, 1);

#app {
  background: linear-gradient(
    to top,
    $bg-player-selector 7%,
    rgba(140, 222, 224, 0.4) 95%
  );
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  color: $advice-font-color;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Varela Round", sans-serif;
  user-select: none !important;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// .slide-fade-enter-active {
//   transition: all 0.3s ease;
// }

// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateX(2rem);
// }
</style>
