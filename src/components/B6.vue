<template>
  <div>
    <p>{{ company }}</p>
    <button class="btn btn-primary" @click="changeState">change state</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const company = computed(() => store.state.b6);

const changeState = () => {
  store.commit("changeState");
};
</script>

<style></style>
