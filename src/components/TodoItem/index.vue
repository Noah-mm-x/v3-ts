<template>
  <div class="todo-item">
    <p class="txt">
      <slot></slot>
    </p>
    <van-icon
      size="24"
      :name="finish ? 'certificate' : 'circle'"
      :class="finish ? 'active' : '' "
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "vant";
export default defineComponent({
  name: "todoItem",
  props: {
    // txt: {
    //   type: String
    // },
    finish: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    [Icon.name]: Icon,
  },
  setup: () => {},
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>