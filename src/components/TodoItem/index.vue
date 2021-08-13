<template>
  <div class="todo-item">
    <a
      href="javascript:;"
      @click="handleDelete(id)"
    >
      <van-icon
        size="24"
        name="cross"
      ></van-icon>
    </a>
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
    id: {
      type: Number,
    },
    finish: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    [Icon.name]: Icon,
  },
  setup: (prop, { emit }) => {
    const handleDelete = (id: number) => {
      emit("handleDelete", id);
    };
    return {
      handleDelete,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>