<template>
  <div class="todo-footer">
    <todo-button></todo-button>
    <todo-intro></todo-intro>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TodoButton from "/@components/TodoButton/index.vue";
import TodoIntro from "/@components/TodoIntro/index.vue";
export default defineComponent({
  name: "",
  components: {
    TodoButton,
    TodoIntro
  },
  setup: () => {},
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>