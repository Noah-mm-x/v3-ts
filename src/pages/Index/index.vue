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
    <van-loading
      class="loading"
      v-if="loading"
      type="spinner"
      color="#abcdef"
      vertical
    >加载中...</van-loading>
    <div
      v-else
      class="content"
    >
      <ul class="list">
        <li
          v-for="(item,index) in newsList"
          :key="index"
        >
          <a href="javascript:;">{{index+1}}. {{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import banner1 from "/@img/banner/banner1.jpeg";
import banner2 from "/@img/banner/banner2.jpeg";
import banner3 from "/@img/banner/banner3.jpeg";
import banner4 from "/@img/banner/banner4.jpeg";
import { Swipe, SwipeItem, Loading } from "vant";
import { apiGetNews } from "/@api/";
import { News } from "/@interface/";
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
    [Loading.name]: Loading,
  },
  setup: () => {
    // let num: number = ref(0)
    // let num = ref<number>(0)
    // let num = ref(0) as number
    let loading = ref<Boolean>(true);
    let newsList = ref<Array<News>>([]);
    onMounted(async () => {
      const data = await apiGetNews();
      newsList.value = data;
      loading.value = false;
      console.log(data);
    });
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
      loading,
      bannerList,
      newsList,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>