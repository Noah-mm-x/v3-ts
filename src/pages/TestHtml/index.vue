<template>
  <div>
    <textarea v-model="markdown"></textarea>
    <div v-html="markdownToHtml"></div>
  </div>
</template>
<script lang="ts">
import{ defineComponent,ref,computed,getCurrentInstance }from 'vue';
export default defineComponent({
  name: "",
  setup: () => {
    const md = getCurrentInstance()?.appContext?.config?.globalProperties.$md
    let markdown = ref('hello world')
    const markdownToHtml = computed(()=>{
      return md(markdown.value)
    })

    const fnc =  ()=>{
      console.log('fnc')
      return function () {
        console.log('fun')
      }
    }
    const a = fnc()
    a()
    return {
      markdown,
      markdownToHtml
    }
  }
})
</script>
<style lang="less" scoped>
 @import "./index.less"; 
</style>