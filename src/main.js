import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { store } from './store/store';
import routes from './routes';
import 'jquery';
import 'bootstrap';


Vue.config.productionTip = false
const router = new VueRouter({
  routes 
})

Vue.use(VueRouter);




var vm = new Vue({
  router,
  store: store,
  methods : {
    syncRouter : function() {
      this.$router.afterEach(() => {
        console.log('router : ' + this.$router.currentRoute?.path);
          store.dispatch('onRouteChanged', this.$router );
      });
    }
  },
  render: h => h(App),
}).$mount('#app');
 
vm.syncRouter();