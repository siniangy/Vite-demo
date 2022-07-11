<template>
	<div>
		<h1>测试vueUse的鼠标坐标</h1>
		<h3>Mouse: {{ x }} -- {{ y }}</h3>
	</div>
</template>
<script lang="ts" setup>
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
</script>
