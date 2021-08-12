<template>
  <div id="todo">
    <todo-item v-for="(item,index) in list" :key="index" :finish="item.finish">{{item.txt}}</todo-item>
    <todo-footer></todo-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TodoItem from "/@components/TodoItem/index.vue";
import TodoFooter from "/@components/TodoFooter/index.vue";
import { apiGetTodos } from "/@api/";
import { Todo } from "/@interface/";
export default defineComponent({
  name: "",
  components: {
    TodoItem,
    TodoFooter
  },
  provide: {
    intro: '我就是个说明😝'
  },
  setup: () => {
    const list = ref<Array<Todo>>([]);
    onMounted(async () => {
      const data = await apiGetTodos();
      console.log(data);
      list.value = data;
    });
    return {
      list,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>