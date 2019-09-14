<template>
  <div id="app">
    <!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>


<style lang="scss">
$base-color: rgba(30, 113, 104, 1);

#app {
  background: linear-gradient(
    to top,
    $base-color 7%,
    rgba(140, 222, 224, 0.4) 95%
  );
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Helvetica neue, roboto;
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
</style>
