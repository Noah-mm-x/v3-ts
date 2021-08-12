<template>
  <div id="user">
    <div class="top-wrap">
      <div class="info-wrap">
        <img class="avatar" src="/@img/user/avatar.jpeg" alt="" srcset="">
        <div class="txt-wrap">
          <p class="name">九张</p>
          <p class="lv">等级：<span>ssssvip</span></p>
        </div>
      </div>
      <p class="intro">一个帅气的美少年</p>
    </div>
  </div>
</template>
<script lang="ts">
import{ defineComponent }from 'vue';
export default defineComponent({
  name: "user",
  setup: () => {

  }
})
</script>
<style lang="less" scoped>
 @import "./index.less"; 
</style>