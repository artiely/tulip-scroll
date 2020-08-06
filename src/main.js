import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VConsole from 'vconsole'
import {
  Collapse,
  CollapseItem,
  Cell,
  CellGroup,
  Switch,
  SwitchCell,
  NoticeBar,
  RadioGroup,
  Radio,
  NavBar,
  Button,
  Toast,
  Divider,
  Field
} from 'vant'

import tulipScroll from '../packages/index'

import 'vant/lib/button/style'
import 'vant/lib/divider/style'
import 'vant/lib/toast/style'
import 'vant/lib/radio/style'
import 'vant/lib/notice-bar/style'
import 'vant/lib/cell/style'
import 'vant/lib/cell-group/style'
import 'vant/lib/switch/style'
import 'vant/lib/switch-cell/style'
import 'vant/lib/collapse/style'
import 'vant/lib/collapse-item/style'
import 'vant/lib/nav-bar/style'
// const vConsole = new VConsole()
// console.log('vConsole', vConsole)
// 注册组件库
Vue.use(tulipScroll)

Vue.config.productionTip = false

Vue.use(Field)
Vue.use(Divider)
Vue.use(Toast)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(NoticeBar)
Vue.use(SwitchCell)
Vue.use(Switch)
Vue.use(Collapse).use(CollapseItem)
Vue.use(Cell).use(CellGroup)

import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
