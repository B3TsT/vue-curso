<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter-component />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    // https://www.youtube.com/watch?v=VYzCM7JP0WI
    // https://www.youtube.com/watch?v=LLNgS4GKBp0
    // https://www.youtube.com/watch?v=1mt2f3NXR2k
    "Counter-component": defineAsyncComponent(() =>
      import("./components/Counter-component.vue")
    ),
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
