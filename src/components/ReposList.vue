<template>
  <div class="card" v-for="i in 10" :key="i">
    <h1 class="card-title">repos title</h1>
    <a href="javascript:;" class="card-address">url</a>
    <div class="star">
      <img src="@/assets/star.svg" alt="" />
      <p>10</p>
    </div>
  </div>
</template>

<script setup>
// import { defineComponent } from "vue";
import { watch } from "vue";
import { useScrollDown } from "@/composition-api/useScrollDown.js";
const { isScrollDown } = useScrollDown();
watch(isScrollDown, (newVal) => {
  if (!newVal) return;
  console.log("newVal =>", newVal);
});
// export default defineComponent({
//   setup() {
//     const scroll = useScrollDown();
//     return {};
//   },
// });
</script>

<style lang="scss" scoped>
.card {
  width: 500px;
  padding: 5px;
  background-color: #fff;
  margin-bottom: 20px;
  .card-title {
    font-size: 14px;
  }
  .card-address {
    text-decoration: none;
  }
  .star {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
  }
}
</style>
