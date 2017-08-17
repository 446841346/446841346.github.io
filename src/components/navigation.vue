<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            currentState : 'getCurrentState'
        })
    },
    methods : {
        changeState (e) {
            this.$store.dispatch('changeState', e.target.className)
        }
    }
};
</script>

<template>
<div class="nav">
    <div class="nav-li">
        <router-link to="/" :class="{active:currentState == 'home'}">
            <span class="home" @click="changeState">HOME</span>
        </router-link>
        <router-link to="/about" :class="{active:currentState == 'about'}">
            <span class="about" @click="changeState">ABOUT ME</span>
        </router-link>
        <router-link to="/experience" :class="{active:currentState == 'exper'}">
            <span class="exper" @click="changeState">EXPERIENCE</span>
        </router-link>
        <router-link to="/" :class="{active:currentState == 'hobby'}">
            <span class="hobby" @click="changeState">HOBBIES</span>
        </router-link>
        <router-link to="/" :class="{active:currentState == 'contact'}">
            <span class="contact" @click="changeState">CONTACT</span>
        </router-link>
    </div>
</div>
</template>

