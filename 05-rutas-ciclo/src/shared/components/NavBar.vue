<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
      >Pokemon por id</router-link
    >
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <customLink v-for="link in links" 
    :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "pokemons" },
        { to: "pokemon-id", name: "por ID", id: 151 },
        { to: "pokemon-about", name: "About" },

        { to: "dbz-characters", name: "Personajes" },
        { to: "dbz-about", name: "DBZ-About" },

        { to: "https://google.com", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  }, 
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
/* la etiqueta a es el  router-link*/
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>