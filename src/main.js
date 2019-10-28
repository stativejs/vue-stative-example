import Vue from 'vue';
import VueStative from 'vue-stative';
import state from 'stative';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

Vue.use(VueStative);
Vue.use(Antd);

Vue.config.productionTip = false;

state.set({
  loading: false,
  coins: [],
  selectedCoin: null
});

// eslint-disable-next-line no-console
state.subscribe(currentState => console.log(currentState));

new Vue({
  render: h => h(App)
}).$mount('#app');
