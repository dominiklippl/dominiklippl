import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import {BootstrapVue} from 'bootstrap-vue'

//Import css files
import './assets/scss/Main.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Font awesome
import {library} from '@fortawesome/fontawesome-svg-core'

import {
    faGithub,
    faDiscord,
    faInstagram,
    faVuejs,
    faGitlab,
    faSpotify,
    faLinkedin,
    faTwitter,
    faFacebook,
    faStackOverflow,
    faYoutube,
    faStackExchange
} from '@fortawesome/free-brands-svg-icons'

import {
    faHeart
} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
    faGithub,
    faDiscord,
    faInstagram,
    faVuejs,
    faGitlab,
    faSpotify,
    faLinkedin,
    faTwitter,
    faFacebook,
    faStackOverflow,
    faYoutube,
    faStackExchange,
    faHeart
);

Vue.component('vue-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
