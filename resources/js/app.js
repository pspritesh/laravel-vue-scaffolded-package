import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

// Vue routes
import Routes from '@/js/routes/Routes';

// Components
import App from '@/js/views/App';

Vue.use(Vuetify);

const app = new Vue({
  el: '#app',
  router: Routes,
  render: h => h(App),
  vuetify: new Vuetify({})
});

export default app;
