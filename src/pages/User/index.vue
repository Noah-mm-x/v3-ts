<template>
  <div id="user">
    <div class="top-wrap">
      <div class="info-wrap">
        <img
          class="avatar"
          src="/@img/user/avatar.jpeg"
          alt=""
          srcset=""
        >
        <div class="txt-wrap">
          <p class="name">九张</p>
          <p class="lv">等级：<span>ssssvip</span></p>
        </div>
      </div>
      <p class="intro">一个帅气的美少年</p>
    </div>
    <div class="list-wrap">
      <ul class="list">
        <li>
          <router-link tag="a" to="/test">Test</router-link>
        </li>
        <li>
          <router-link tag="a" to="/testHtml">testHtml</router-link>
        </li>
        <li>
          <router-link tag="a" to="/todo">Todo</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "user",
  setup: () => {},
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>