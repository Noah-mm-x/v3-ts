<template>
  <div class="cart">
    <van-icon
      size="40"
      name="cart-o"
      color="#ff8000"
      :badge="num"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { Icon } from "vant";
import { useStore } from "/@store/";
export default defineComponent({
  name: "cart",
  components: {
    [Icon.name]: Icon,
  },
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