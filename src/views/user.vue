<template>
	<div>
		<p>store中的名字： {{ userStore.name }}</p>
		<el-input v-model="name" style="width: 220px" />
		<div>
			<el-button @click="handleNameChange">修改名字</el-button>
		</div>
		<div>
			<el-button @click="handleLogin">特定姓名登录</el-button>
		</div>
		<div>
			<VueUse />
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/components/user';
import VueUse from '@/components/vueUse.vue';

const userStore = useUserStore();
const router = useRouter();
const name = ref('');

const handleNameChange = () => {
	console.log(name);
	userStore.updateName(name.value);
};

const handleLogin = () => {
	if (name.value !== '祀念') {
		alert('输入正确姓名');
	} else {
		router.push('/index');
	}
};
</script>
