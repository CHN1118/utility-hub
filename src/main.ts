import { createApp } from 'vue'
import App from './App.vue'
// 导入 normalize
import 'normalize.css'
// 导入自定义的公共样式
import '@/assets/styles/common.less'
// 导入路由
import router from './router/index'
// 导入复用组件
import plugin from "./components/index";
// 导入 pinia
import { createPinia } from 'pinia'
// 导入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

let pinia = createPinia()
const app = createApp(App)
app.use(router)
    .use(router)
    .use(pinia)
    .use(plugin)
    .use(ElementPlus)
    .mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}