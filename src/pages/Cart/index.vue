<template>
  <div id="cart">

  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "/@store/";
export default defineComponent({
  name: "cart",
  setup: () => {
    const { getters } = useStore();
    let num = computed((): number => getters.shoppingCartLen);
    // let num = ref<number>(0);
    return {
      num,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>