<template>
  <div id="products">
    <ul class="list">
      <li
        v-for="(item,index) in list"
        :key="index"
      >
        <a href="javascript:;">
          <img
            class="img"
            :src="item.img"
            alt=""
            srcset=""
          >
          <div class="info-wrap">
            <p class="title">{{item.title}}</p>
            <p class="price">价格：<span>{{item.price}}</span></p>
            <p class="num">剩余件数：<span>{{item.count}}</span></p>
            <van-icon
              @click="handleAdd(item)"
              class="icon"
              name="add-o"
              size="30px"
            />
          </div>
        </a>
      </li>
    </ul>
    <cart></cart>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Cart from "/@src/components/Cart/index.vue";
import { Icon } from "vant";
// import mixin from "/@src/utility/mixin.ts";
import { apiGetProducts } from "/@api/";
import { Product } from "/@interface";
import { useStore } from "/@store/";
export default defineComponent({
  name: "Products",
  // mixins: [mixin],
  components: {
    Cart,
    [Icon.name]: Icon,
  },
  setup: () => {
    const { commit } = useStore();
    const list = ref<Array<Product>>([]);
    onMounted(async () => {
      const data = await apiGetProducts();
      console.log(data);
      list.value = data;
    });
    const handleAdd = (item: Product) => {
      console.log(item);
      commit('addToCart',item)
    };
    return {
      list,
      handleAdd,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>