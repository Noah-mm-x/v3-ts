<template>
  <div class="todo-button">
    <van-button type="default" round>取消</van-button>
    <van-button type="primary" round>确定</van-button>
  </div>
</template>
<script lang="ts">
import{ defineComponent }from 'vue';
import { Button } from 'vant';
export default defineComponent({
  name: "",
  components: {
    [Button.name]: Button
  },
  setup: () => {

  }
})
</script>
<style lang="less" scoped>
 @import "./index.less"; 
</style>