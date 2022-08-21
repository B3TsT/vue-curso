<template>
  <h1>¿Quien es este pokémon?</h1>

  <!-- TODO: Picture -->
  <pokemon-picture v-bind:pokemonId="40" :showPokemon="false" />
  <!-- TODO: OPCIONES -->
  <pokemon-opcions :pokemons="pokemonArr" />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOpcions from "@/components/PokemonOpcions.vue";
import getPokemonOptions from "@/pages/helpers/getPokemonOptions";

// console.log(getPokemonOptions());

export default {
  components: {
    PokemonPicture,
    PokemonOpcions,
  },
  data() {
    return {
      // pokemonArr: [jidasiodaks],
      pokemonArr: [],
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions(jidasiodaks);
      console.log(this.pokemonArr);
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>