<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng (kg)</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in store.state.b3" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>

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
