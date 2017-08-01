<script>
import { mapGetters } from 'vuex';
import Navigation from './navigation';
import Home from './home';

export default {
    components: { Navigation,Home},
    computed: {
        ...mapGetters({
            currentState : 'getCurrentState'
        })
    }
}
</script>

<template>
<div class="wraper">
	<div class="home-broad" :class="{'home-pic':currentState == 'home'}"></div>
	<div class="right-mod">
		<navigation></navigation>
		<router-view></router-view>
	</div>
	<div class="about-broad" :class="{'about-pic':currentState == 'about'}"></div>
</div>
</template>
