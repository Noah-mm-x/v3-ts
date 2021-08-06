<template>
  <div class="navbar">
    <p class="txt">首页</p>
    <p class="num">{{num}}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "/@store/";
export default defineComponent({
  name: "",
  setup: () => {
    // let num = ref<number>(0);
    const store = useStore();
    const { getters } = store;
    let num = computed((): number => getters.shoppingCartLen);
    return {
      num,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>