<template>
  <a v-if="isExternalLink" 
  target="_blank"
  class="normal-link"
  :href="link.to">{{link.name}}</a>

  <router-link 
    v-else 
    :to="route"
    v-slot="{ isActive}">
    <a :class="isActive ? 'is-Active' : 'normal-link'">
      {{link.name}}
    </a>
  </router-link>
</template>

<script>
    // <!-- "{ href, isActive}" -->
    //<!-- <a :href="href"  -->
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith('http')
    },
    route() {
      return this.link.id === undefined
      ? {name: this.link.to}
      : {name: this.link.to, params: { id: this.link.id}}
    },
  },
};
</script>

<style scoped>
.is-Active{
  color: #42b982;
}
.normal-link{
  color: #c6c5c5;
}
</style>