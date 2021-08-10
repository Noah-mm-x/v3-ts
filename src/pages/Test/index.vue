<template>
  <div>
    test
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  setup: () => {
    enum Direction {
      n = 4,
      s,
      e,
      w,
    }
    let dir: Direction = Direction.e;
    console.log(Direction, dir);
  },
});
</script>
<style lang="less" scoped>
</style>