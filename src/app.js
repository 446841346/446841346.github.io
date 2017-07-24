import './less/style';
import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';
import store from './store';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    render:h=>h(App),
    store: store,
});
