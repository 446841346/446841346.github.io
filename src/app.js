import './less/style';
import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';
import Home from './components/home';
import About from './components/about';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component:Home,
			beforeEnter: (to, from, next) => {
				store.dispatch('changeState','home');
				next();
			}
		},
		{
			path:'/about',
			component:About,
			beforeEnter: (to, from, next) => {
				store.dispatch('changeState','about');
				next();
			}
		}
	]
})
new Vue({
    el: '#app',
    store: store,
    render:h=>h(App),
    router:router
});
