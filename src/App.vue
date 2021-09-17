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
        v-for="(item,index) in itemList"
        :key="index"
        replace
        :to="item.link"
        :icon="item.icon"
        :badge="item.badge"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from "vue";
import NavBar from "/@src/components/NavBar/index.vue";
import { Tabbar, TabbarItem } from "vant";
interface list {
   link: string,
   name: string,
   icon: string,
   badge?: string
}

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup(){
    const itemList: Array<list> = reactive([
      {
        link: "/",
        name: "首页",
        icon: "home-o"
      },
      {
        link: "/products",
        name: "商品",
        icon: "shop"
      },
      {
        link: "/cart",
        name: "购物车",
        icon: "bag-o",
        badge: 0
      },
      {
        link: "/user",
        name: "我的",
        icon: "contact"
      }
    ])
    return {
      itemList
    }
  }
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

