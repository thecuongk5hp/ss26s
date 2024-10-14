<template>
  <div :class="['box', { 'dark-mode': b7 }]">
    <div>
      <input type="checkbox" v-model="b7" @change="toggleTheme" />
      <span>Chế độ tối</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const b7 = computed(() => store.state.b7);

const toggleTheme = () => {
  store.commit("toggleDarkMode");
};
</script>

<style>
.box {
  width: 100%;
  height: 100px;
}

.dark-mode {
  background-color: #333;
  color: white;
}

.light-mode {
  background-color: white;
  color: black;
}
</style>
