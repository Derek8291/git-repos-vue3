<template>
  <div id="app">
    <TitleBar />
    <ReposList />
  </div>
</template>

<script>
import { defineComponent, provide } from "vue";
import TitleBar from "@/components/TitleBar.vue";
import ReposList from "@/components/ReposList.vue";
import store from "@/composition-api/store.js";
export default defineComponent({
  name: "App",
  components: {
    TitleBar,
    ReposList,
  },
  setup() {
    provide("mapStore", store);
    return {};
  },
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #ccc;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
</style>
