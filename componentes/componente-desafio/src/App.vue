<template>
	<v-app>
		<Menu/>
		<Toolbar />
		<app-body />
		<app-footer />

		
	</v-app>
</template>

<script>
import Menu from '@/components/template/Menu.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Body from '@/components/widgets/Body.vue'
import Footer from '@/components/template/Footer'
export default {
	components:{
		Menu,
		Toolbar,
		appBody: Body,
		'app-footer': Footer
	}
}
</script>
