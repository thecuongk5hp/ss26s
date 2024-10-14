<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in store.state.b2" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.fullName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dateOfBirth }}</td>
          <td>{{ user.address }}</td>
          <td>
            <btuton class="btn btn-light me-2">Sửa</btuton>
            <btuton class="btn btn-light">Xóa</btuton>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style></style>
