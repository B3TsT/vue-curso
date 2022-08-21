<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ computedCounted }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" v-bind:disabled="isLoading">Random</button>

  <h1>mapSate</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>mapState: {{ lastMutation }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  //// computed: mapState(["count"]),
  computed: {
    computedCounted() {
      return this.$store.state.count;
    },
    // * Forma 1
    ...mapState(["count", "lastMutation"]),
    // * Forma 2
    // ...mapState({
    //   count: (state) => state.count,
    //   lastMutation: (state) => state.lastMutation,
    //   lastMutation: 'lastMutation',
    // }),
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementBy() {
      this.$store.commit("incrementBy", 5);
      // this.randomInt();
    },
    ...mapActions({
      randomInt: "incrementRandomInt",
    }),
    // ...mapActions(["incrementRandomInt"]),
    // incrementRandomInt() {
    //   this.$store.dispatch("incrementRandomInt");
    // },
  },
};
</script>

<style>
</style>