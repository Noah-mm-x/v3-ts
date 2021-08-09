<template>
  <div class="navbar">
    <div class="place"></div>
    <div class="con">
      <a
        class="txt"
        href="javascript:;"
        @click="backIndex"
      >首页</a>
      <p class="num">{{num}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "/@store/";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "",
  setup: () => {
    // let num = ref<number>(0);
    const store = useStore();
    const { getters } = store;
    let num = computed((): number => getters.shoppingCartLen);
    const router = useRouter();
    const backIndex = () => {
      router.push("/");
    };
    return {
      num,
      backIndex,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>