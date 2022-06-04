import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "../lib/Throttle";
export function useScrollDown() {
  const isScrollDown = ref(false);

  const handleScrollDown = throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      isScrollDown.value = true;
    } else {
      isScrollDown.value = false;
    }
  });

  onMounted(() => {
    window.addEventListener("scroll", handleScrollDown);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollDown);
  });

  return { isScrollDown };
}
