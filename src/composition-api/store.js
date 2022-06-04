import { reactive } from "vue";

const store = reactive({
  reposList: [],
  userPhoto: "https://avatars.githubusercontent.com/u/91451537?v=4",
  userTitle: "Derek8291",
});

const setRepoList = (repos) => {
  store.reposList = [...store.reposList, ...repos];
};

const setUserData = (res) => {
  store.userTitle = res.data.login;
  store.userPhoto = res.data.avatar_url;
};

export default { store, setRepoList, setUserData };
