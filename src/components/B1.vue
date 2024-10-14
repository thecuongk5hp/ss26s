<template>
  <div>
    <h3>Thông tin cá nhân</h3>
    <p>id: {{ store.state.b1.id }}</p>
    <p>Họ và tên: {{ store.state.b1.fullName }}</p>
    <p>Giới tính: {{ store.state.b1.gender }}</p>
    <p>Ngày sinh: {{ store.state.b1.dateOfBirth }}</p>
    <p>Địa chỉ: {{ store.state.b1.address }}</p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style></style>
