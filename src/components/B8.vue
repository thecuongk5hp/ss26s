<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="toggleLanguage">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const greeting = computed(() =>
  store.state.b8 === "vi" ? "Xin chào, thế giới!" : "Hello, world!"
);

const buttonLabel = computed(() =>
  store.state.b8 === "vi" ? "Chuyển sang tiếng Anh" : "Switch to Vietnamese"
);

const toggleLanguage = () => {
  const newLanguage = store.state.b8 === "vi" ? "en" : "vi";
  store.dispatch("changeLanguage", newLanguage);
};
</script>

<style></style>
