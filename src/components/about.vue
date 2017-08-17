<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
        ...mapGetters({
            myDscribtion : 'getMyDscribtion',
            mySkill : 'getMySkill'
        })
    },
    methods:{
    	processBarAppear(el){
    		setTimeout(() => {
    			el.style.width = el.getAttribute('data-process')+'%';
    		},Math.random()*1000);
    	}
    }
};
</script>

<template>
<div class="about-mod">
	<div class="about-dsc">
		<h5 class="about-title">About Me</h5>
		<div class="about-me">
			<div class="me-pic">
				<span class="avatar-pic"></span>
			</div>
			<div class="me-dsc">
				<p class="me-title">My name is David Lau 
					<span class="dsc-small">( LDW in chinese is short for LauDeWei )</span>
				</p>
				<p class="me-content">{{myDscribtion.normal}}<strong>{{myDscribtion.strong}}</strong></p>
			</div>
		</div>
		<h5 class="about-title">About My Skill</h5>
		<div class="about-skill">
			<div v-for="item in mySkill" class="skill-box">
				<p class="skill-title">{{item.skillName}}</p>
				<div v-for="s in item.skillContent"class="skill-content">
					<span class="skill-icon" :class="s.name+'-icon'"></span>
					<span class="skill-name">{{s.title}}</span>
					<div class="skill-process">
						<transition v-on:appear="processBarAppear">
							<div class="process-sche" :data-process="s.process"></div>
						</transition>
						<span>{{s.process}}%</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>