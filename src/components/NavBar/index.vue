<template>
  <div class="navbar">
    <div class="place"></div>
    <div class="con">
      <a
        class="txt"
        href="javascript:;"
        @click="backIndex"
      >首页</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "",
  setup: () => {
    const router = useRouter();
    const backIndex = () => {
      router.push("/");
    };
    return {
      backIndex,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>