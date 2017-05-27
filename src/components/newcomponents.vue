<template>
	<div class="father">
		<div><img src="../assets/hi.jpg"></div> 
		<h1>这里是一个父组件哦</h1>
		<h1>组件的嵌套</h1>
		<my-component></my-component>
	</div>
</template>
<script type="text/javascript">
	import child from '../components/child'
	export default {
		name: 'father',
		components: {
			'my-component': child,
		}
	}	
</script>