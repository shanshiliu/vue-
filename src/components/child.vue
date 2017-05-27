<template>
	<div class="child">
		<h2>这里是一个子组件哦</h2>
		<div>{{msg}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'child',
		data() {
			return {
				msg: '这里是一个子组件的内容哦'
			}
		}
	} 
</script>