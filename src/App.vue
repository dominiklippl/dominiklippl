<template>
    <div id="app">
        <vue-nav></vue-nav>
        <b-container fluid class="h-100 pt-5">
            <b-row align-h="center" align-v="end" class="content-wrapper text-light h-100 p-0 p-sm-3">
                <b-col sm="12" xl="9" class="d-block text-center">
                    <b-row align-v="center">
                        <b-col sm="12" :md="$route.name === 'Home' ? '12' : '6'">
                            <div class="circle shadow-lg d-inline-block rounded-circle">
                                <img src="./assets/profile.png" class="img-fluid rounded-circle" alt="Profile"
                                     style="height: auto">
                            </div>
                            <h1 class="text-shadow" style="">Dominik Lippl</h1>
                            <p class="text-shadow" style="font-size: 1rem;">Java Entwickler, Auszubildender</p>

                            <a href="https://github.com/dominiklippl" target="_blank">
                                <vue-icon :icon="['fab', 'github']" class="social-icons"></vue-icon>
                            </a>
                            <a href="https://stackoverflow.com/users/10201717/dominik" target="_blank">
                                <vue-icon :icon="['fab', 'stack-overflow']" class="social-icons"></vue-icon>
                            </a>
                            <a href="https://www.linkedin.com/in/dominik-lippl-871360193/" target="_blank">
                                <vue-icon :icon="['fab', 'linkedin']" class="social-icons"></vue-icon>
                            </a>
                            <a href="https://www.instagram.com/dominiklippl/" target="_blank">
                                <vue-icon :icon="['fab', 'instagram']" class="social-icons"></vue-icon>
                            </a>
                            <a href="https://twitter.com/dominiklippl" target="_blank">
                                <vue-icon :icon="['fab', 'twitter']" class="social-icons"></vue-icon>
                            </a>
                            <a href="https://www.facebook.com/lippldominik" target="_blank">
                                <vue-icon :icon="['fab', 'facebook']" class="social-icons"></vue-icon>
                            </a>
                            <a href="https://www.youtube.com/channel/UCJVkR9_0wK4Y3UDr3Mp914g" target="_blank">
                                <vue-icon :icon="['fab', 'youtube']" class="social-icons"></vue-icon>
                            </a>
                            <a href="https://open.spotify.com/user/uykhajf39li1etqi0vgz2sp6o?si=FO10NYJfQAuZMMcVerlw3g" target="_blank">
                                <vue-icon :icon="['fab', 'spotify']" class="social-icons"></vue-icon>
                            </a>
                        </b-col>
                        <b-col v-if="$route.name !== 'Home'" sm="12" md="6" class="pt-4 pt-md-0 d-flex justify-content-center align-items-center">
                            <div class="content-card py-4 px-4 rounded-lg shadow" :style="$route.name !== 'Projekte' ? 'width: 600px;' : ''">
                                    <transition name="fade" mode="out-in">
                                        <router-view/>
                                </transition>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>

                <vue-footer class="col-12"></vue-footer>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import vueNav from "@/components/Nav";
    import vueFooter from "@/components/Footer";

    export default {
        name: 'app',
        components: {vueNav, vueFooter},
        mounted() {
            global.THREE = window.THREE;
            window.VANTA.NET({
                el: "#app",
                mouseControls: true,
                touchControls: true,
                height: '100%',
                width: '100%',
                minHeight: 500.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: "#f5f5f5",
                backgroundColor: "#2d3436",
                points: 10.00,
                maxDistance: 30.00,
                spacing: 20.00
            });
        }
    }
</script>

<style lang="scss">
    #app {
        width: 100vw;
        height: 100vh;

        > .vanta-canvas {
            position: fixed !important;
        }
    }

    .circle {
        backdrop-filter: blur(7.5px);
    }

    .content-wrapper {
        z-index: 1000 !important;
    }

    .content-card {
        background-color: rgba(55, 55, 55, 0.2);
        backdrop-filter: blur(20px);
        width: 450px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .social-icons {
        padding: 0.15em;
        color: white;
        font-size: 2.25em;
    }
</style>
