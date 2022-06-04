import { apiGetUserData } from "@/api";
import store from "./store";
export function apiGetUser() {
  const getUserData = async (userData) => {
    let res = await apiGetUserData(userData);
    if (res) {
      store.store.reposList = [];
      store.setUserData(res);
    }
  };
  return { getUserData };
}
