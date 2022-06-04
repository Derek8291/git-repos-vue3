<template>
  <div id="repos">
    <div class="card" v-for="item in store.reposList" :key="item.id">
      <h1 class="card-title">{{ item.name }}</h1>
      <a :href="item.html_url" class="card-address">{{ item.html_url }}</a>
      <div class="star">
        <img src="@/assets/star.svg" alt="" />
        <p>10</p>
      </div>
    </div>
    <div class="load" v-show="!isLoad">Loading</div>
  </div>
</template>

<script setup>
// import { defineComponent } from "vue";
import { onMounted, watch, inject } from "vue";
import { useScrollDown } from "@/composition-api/useScrollDown.js";
import { useFetchRepos } from "@/composition-api/useFetchRepos.js";
const { isScrollDown } = useScrollDown();
const { init, isLoad, next } = useFetchRepos();
const useStore = inject("mapStore");
const { store } = useStore;

watch(isScrollDown, (newVal) => {
  if (!newVal) return;
  next();
});
onMounted(() => {
  init();
});
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
