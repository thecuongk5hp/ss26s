<template>
  <div>
    <p>{{ randomNumbers }}</p>
    <button class="btn btn-primary" @click="GenerateRandomNumber">
      Generate Random Number
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const randomNumbers = computed(() => store.state.b5);

const GenerateRandomNumber = () => {
  store.dispatch("GenerateRandomNumber");
};
</script>

<style></style>
