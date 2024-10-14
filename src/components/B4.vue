<template>
  <div>
    <p>giá trị count: {{ count }}</p>
    <button class="btn btn-primary me-2" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const count = computed(() => store.state.b4);

const increment = () => {
  store.commit("increment");
};

const decrement = () => {
  store.commit("decrement");
};
</script>

<style></style>
