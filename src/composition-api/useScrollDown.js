import { onMounted, onUnmounted, ref } from "vue";

export function useScrollDown() {
  const isScrollDown = ref(false);

  const handleScrollDown = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      isScrollDown.value = true;
      console.log("到底了");
    } else {
      isScrollDown.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScrollDown);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollDown);
  });

  return { isScrollDown };
}
