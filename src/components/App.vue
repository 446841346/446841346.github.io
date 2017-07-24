<script>
import { actions } from '../store';

export default {
    components: { },
    vuex: {
    }
}
</script>

<template>
<div class="wraper">
	<div class="nav">
		<ul class="nav-li">
			<li class="active"><a href="">HOME</a></li>
			<li><a href="">ABOUT ME</a></li>
			<li><a href="">EXPERIENCE</a></li>
			<li><a href="">HOBBIES</a></li>
			<li><a href="">CONTACT</a></li>
		</ul>
	</div>
	<div class="left-mod">
		<div class="pic-broad"></div>
	</div>
	<div class="right-mod">
		<div class="home">
			<div class="home-dsc">
				<h5 class="home-title">Welcome to my website</h5>
				<h1 class="home-intro">Hello,I am LDW from GuangZhou</h1>
				<p class="home-cont">This is my website include some of my career,education and my life.If you are interesting ,please click the below button to know more !</p>
				<button class="home-start">Know more</button>
			</div>
		</div>
	</div>
</div>
</template>
