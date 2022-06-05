<template>
  <div class="titlebar">
    <img class="user_photo" :src="store.userPhoto" alt="" />
    <h1 class="user_title">{{ store.userTitle }}</h1>
    <div class="form">
      <input type="text" v-model.trim="textUserId" />
      <button @click="searchData">確認</button>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { apiGetUser } from "@/composition-api/useFetchUserData.js";
import { useFetchRepos } from "@/composition-api/useFetchRepos.js";
const { init, pageIdx } = useFetchRepos();
const { getUserData } = apiGetUser();
const textUserId = ref("");
const useStore = inject("mapStore");
const { store } = useStore;
const valueTest = /^[A-Za-z0-9]+$/;
const searchData = async () => {
  if (valueTest.test(textUserId.value)) {
    pageIdx.value = 0;
    let res = await getUserData(textUserId.value);
    console.log(res);
    init();
  } else {
    alert("請輸入正確帳號");
  }
};
</script>

<style lang="scss" scoped>
.titlebar {
  margin-bottom: 50px;
  .user_photo {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid rgba(191, 233, 112, 0.5);
  }
  .user_title {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
