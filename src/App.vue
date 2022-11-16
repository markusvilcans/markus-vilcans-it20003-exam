<script>
import { auth } from '/src/stores/auth';
export default {
  data(){
    return {
        auth
    }
  }
}
</script>

<template>
    <Header v-show="auth.is_authenticated" ></Header>
    <div id="section-body">
        <NavigationComponent v-show="auth.is_authenticated"></NavigationComponent>
        <router-view class="section-router"></router-view>
    </div>
    <div v-show="auth.is_authenticated" id="section-player">
        <AudioPlayer />
    </div>
</template>
