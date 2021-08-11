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
    let tup: [string, boolean];
    tup = ["d", false];
    console.log(tup);
    function haha(): void {
      console.log("haha");
    }
    haha();
    function msgFnc(msg: string | undefined | null) {
      // 注意 ! 叹号,不然报错
      const onlyString: string = msg!;
    }

    interface Person {
      name: string;
      age: number;
    }
    class Teacher implements Person {
      name: string;
      age: number;
      constructor(name: string, age: number, private job: string) {
        this.name = name;
        this.age = age;
      }
      getJob() {
        return this.job;
      }
    }
    const tz = new Teacher("张三", 23, "老师");
    const tzJob = tz.getJob();
    console.log(tzJob, tz.age);

    type XDefine = { x: number };
    type Point = XDefine & { y: number };
    let p1: Point = {
      x: 1,
      y: 1,
    };
    console.log(p1);
  },
});
</script>
<style lang="less" scoped>
</style>