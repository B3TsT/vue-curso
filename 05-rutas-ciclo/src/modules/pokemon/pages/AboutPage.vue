<template>
  <h1>About Pages</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Cambiar Nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "fernando",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Melissa";
    },
  },
  created() {
    console.log("created");
    // * peticiones HTTP
  },
  beforeMount() {
    console.log("beforeMount");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
    // * limpieza
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>