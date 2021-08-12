<template>
  <div class="todo-button">
    <van-button
      type="default"
      round
    >取消</van-button>
    <van-button
      type="primary"
      round
      @click="handleConfirm"
    >确定</van-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import { Button, Toast } from "vant";
export default defineComponent({
  name: "",
  components: {
    [Button.name]: Button,
  },
  // inject:['intro'],
  setup: () => {
    const intro = inject<string>("intro");
    const handleConfirm = () => {
      Toast(intro);
      console.log(intro);
    };
    return {
      handleConfirm,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>