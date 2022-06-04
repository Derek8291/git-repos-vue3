import { ref } from "vue";
import { apiGetGithubRepos } from "@/api";
import store from "./store";
export function useFetchRepos() {
  const isLoad = ref(false);
  const pageIdx = ref(0);
  const resData = ref([]);
  const init = async () => {
    pageIdx.value += 1;
    const data = {
      username: store.store.userTitle,
      page: pageIdx.value,
    };
    try {
      const res = await apiGetGithubRepos(data);
      if (res.data) {
        isLoad.value = true;
        store.setRepoList(res.data);
        resData.value = res.data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const next = () => {
    isLoad.value = false;
    if (resData.value.length === 0) return;
    init();
  };
  return { init, isLoad, next, pageIdx };
}
