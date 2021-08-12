<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component
          :is="Component"
          v-if="$route.meta.keepAlive"
        />
      </keep-alive>
      <component
        :is="Component"
        v-if="!$route.meta.keepAlive"
      />
    </router-view>
    <!-- <router-view />-->
    <div class="place"></div>
    <van-tabbar
      route
      :safe-area-inset-bottom="true"
      active-color="#FF8000"
    >
      <van-tabbar-item
        replace
        to="/"
        icon="home-o"
      >首页</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/products"
        icon="shop"
      >商品</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/user"
        icon="contact"
      >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "/@src/components/NavBar/index.vue";
import { Tabbar, TabbarItem } from "vant";
export default defineComponent({
  name: "App",
  components: {
    NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
});
</script>

<style lang="less" scoped>
#app {
  min-height: 100%;
  .place {
    height: var(--van-tabbar-height);
  }
}
</style>

