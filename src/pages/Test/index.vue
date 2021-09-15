<template>
  <div>
    <van-tabs
      v-model:active="active"
      :swipeable="true"
      :ellipsis="false"
    >
      <van-tab
        v-for="index in 4"
        :key="index"
        :title="'标签标签标签标签标签标' + index"
      >
        内容 {{ index }}
      </van-tab>
    </van-tabs>
    test
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Tab, Tabs } from "vant";
export default defineComponent({
  name: "testt",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  setup: () => {
    enum Direction {
      n = 4,
      s,
      e,
      w,
    }
    let dir: Direction = Direction.e;
    // console.log(Direction, dir);
    let tup: [string, boolean];
    tup = ["d", false];
    // console.log(tup);
    function haha(): void {
      // console.log("haha");
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
    // console.log(tzJob, tz.age);

    type XDefine = { x: number };
    type Point = XDefine & { y: number };
    let p1: Point = {
      x: 1,
      y: 1,
    };
    // console.log(p1);

    function identity<T, U>(value: T, msg: U): T {
      // console.log(msg)
      return value;
    }
    // console.log(identity<number,string>(12,'sss'))

    const per1: Person = { name: "战神", age: 109 };
    type sp = typeof per1;
    const sp1: sp = { name: "刑天", age: 990 };
    // console.log(sp1);

    const personSay = (per: Person, msg: Partial<Person>): void => {
      console.log(`${per.name} say ${msg.name}`);
    };
    personSay({ name: "战神", age: 109 }, { name: "hh" });
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>