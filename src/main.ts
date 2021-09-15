// main.ts
import { createApp } from 'vue'
import { store , key} from './store/index';
import App from './App.vue'
import router from './router';
import 'vant/lib/index.css';
import 'lib-flexible'
import '/@src/assets/css/reset.less'
import '/@src/assets/css/vantChange.less'
import marked from 'marked';

const app = createApp(App);
app.use(router);
app.use(store,key);
app.mount('#app')

app.config.globalProperties.$md = marked

// 添加全局方法
// app.config.globalProperties.$toast = (msg)=>{
//   return Toast(msg) // 根据需求自定义
// };


