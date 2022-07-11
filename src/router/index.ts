import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录',
			keepAlive: true,
			requireAuth: false,
		},
		component: () => import('@/views/user.vue'),
	},
	{
		path: '/',
		name: 'Index',
		meta: {
			title: '首页',
			keepAlive: true,
			requireAuth: true,
		},
		component: () => import('@/views/home.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
