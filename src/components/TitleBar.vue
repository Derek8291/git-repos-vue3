<template>
  <div class="titlebar">
    <img class="user_photo" src="@/assets/notFound.jpg" alt="" />
    <h1 class="user_title">derek</h1>
  </div>
</template>

<script setup>
import { inject } from "vue";

const useStore = inject("mapStore");
console.log(useStore);
</script>

<style lang="scss" scoped>
.titlebar {
  margin-bottom: 50px;
  .user_photo {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid rgba(150, 100, 10, 0.5);
  }
  .user_title {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
