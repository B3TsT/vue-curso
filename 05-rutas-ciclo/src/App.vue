<template>
  <NavBar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <AboutPage /> -->
  <router-view></router-view>
</template>

<script>
import AboutPage from "./modules/pokemon/pages/AboutPage.vue";
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    NavBar: defineAsyncComponent(() =>
      import(/* webpackChunkName: "NavBar" */ "@/shared/components/NavBar.vue")
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
