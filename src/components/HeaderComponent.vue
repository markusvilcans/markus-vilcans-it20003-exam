<template>
    <div id="main-header" class="active">
        <div class="wrapper-logo">
            <img src="../assets/logo.png"/>
            <h2>You're Now Tuning In To 66.6 FM</h2>
        </div>
        <div class="wrapper-profile">
            <div class="section-user">
                <span class="avatar"></span>
                <h3 id="txt-full-name">{{returnUsername}}</h3>
            </div>
            <button id="btn-logout" @click="auth.logout()">LOGOUT</button>
        </div>
    </div>
</template>


<script>
import { auth } from '/src/stores/auth.js'
export default {
    data() {
        return {
            auth
        }
    },
    methods: {
        
    },
    computed: {
        returnUsername(){
            return "Hello, " + auth.user.name + " " + auth.user.surname;
        }
    }
}
</script>