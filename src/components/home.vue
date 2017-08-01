<script>
import { mapGetters } from 'vuex';
export default {
	methods : {
		changeState(){
			this.$store.dispatch('changeState', 'about')
		}
	}
};
</script>

<template>
<div class="home-mod">
	<div class="home-dsc">
		<h5 class="home-title">Welcome to my website</h5>
		<h1 class="home-intro">Hello,I am LDW from GuangZhou</h1>
		<p class="home-cont">This is my website include some of my career,education and my life.If you are interesting ,please click the below button to know more !</p>
		<router-link to="/about">
			<span @click="changeState" class="home-start">Know more</span>
		</router-link>
	</div>
</div>
</template>

