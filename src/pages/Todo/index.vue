<template>
  <div id="todo">
    <todo-item
      v-for="(item,index) in list"
      :key="index"
      :id="item.id"
      :finish="item.finish"
      @handleDelete="handleDelete"
    >{{item.txt}}</todo-item>
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
    TodoFooter,
  },
  provide: {
    intro: "我就是个说明😝",
  },
  setup: () => {
    const list = ref<Array<Todo>>([]);
    onMounted(async () => {
      const data = await apiGetTodos();
      console.log(data);
      list.value = data;
    });
    const handleDelete = (id: number): void => {
      const index = list.value.findIndex((item) => {
        return item.id == id;
      });
      list.value.splice(index, 1);
    };
    return {
      list,
      handleDelete,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>