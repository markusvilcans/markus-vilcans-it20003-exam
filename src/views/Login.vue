<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="../assets/logo.png" />
                <div>You're Now Tuning In To 66.6 FM</div>
            </div>
            <input v-model="email" id="input-email" placeholder="E-mail" />
            <input v-model="password" id="input-password" type="password" placeholder="Password" />
            <button id="btn-submit" :disabled="isDisabled" @click="auth.authenticate(email, password)">LOGIN</button>
        </form>
    </div>
</template>

<script>
import { auth } from '/src/stores/auth';
export default {
  data(){
    return {
        email: '',
        password: '',
        auth
    }
  },
  computed: {
    isDisabled() {
            return this.email.length < 3 || this.password.length < 6;
        }
    }
}
</script>