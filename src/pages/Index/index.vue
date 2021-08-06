<template>
  <div id="index">
    <van-swipe
      class="banner-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="(item,index) in bannerList"
        :key="index"
      >
        <img
          class="img"
          :src="item.url"
          :alt="index"
        >
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <ul class="list">
        <li v-for="(item,index) in newsList" :key="index">
          <a href="javascript:;">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive,ref} from "vue";
import banner1 from "/@img/banner1.jpeg";
import banner2 from "/@img/banner2.jpeg";
import banner3 from "/@img/banner3.jpeg";
import banner4 from "/@img/banner4.jpeg";
import { Swipe, SwipeItem } from "vant";
import {apiGetNews} from "/@api/"
interface Banner {
  url: string;
  link?: string;
  target?: Boolean;
}
export default defineComponent({
  name: "Index",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup: () => {
    // let num: number = ref(0)
    // let num = ref<number>(0)
    // let num = ref(0) as number
    let newsList = ref<[]>([])
    onMounted(async ()=>{
      const data = await apiGetNews()
      newsList.value = data
      console.log(data)
    })
    const bannerList: Array<Banner> = reactive([
      {
        url: banner1,
      },
      {
        url: banner2,
        link: "baidu.com",
        target: true,
      },
      {
        url: banner3,
        link: "baidu.com",
      },
      {
        url: banner4,
        link: "baidu.com",
      },
    ]);
    return {
      bannerList,
      newsList
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>