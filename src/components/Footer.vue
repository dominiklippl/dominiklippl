<template>
    <footer class="text-center">
        <span class="">Gemacht mit <vue-icon icon="heart" class="icon text-danger"></vue-icon> und <a href="https://vuejs.org/" target="_blank"><vue-icon :icon="['fab', 'vuejs']" class="icon" style="color: #42b883"></vue-icon></a> | <router-link to="/Imprint" style="text-decoration: none; color: white"> Impressum</router-link></span>
    </footer>
</template>

<script>
    export default {
        name: "vueFooter"
    }
</script>

<style lang="scss">
    .icon {
        color: white;
        font-size: 1em;
    }
</style>
