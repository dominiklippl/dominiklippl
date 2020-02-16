<template>
    <div class="projects text-center">
        <h1 class="mb-4 text-center">Projekte</h1>
        <vue-bar id="projects" data-simplebar-auto-hide="false">
            <b-card v-for="(project, id) in projects" v-bind:key="project.name"
                    :title="project.name"
                    :img-src="project.image"
                    :img-alt="project.name"
                    img-top
                    border-variant="0"
                    :class="id < projects.length-1 ? 'mb-4' : ''"
                    bg-variant="dark">
                <b-card-text>
                    {{ project.description }}
                </b-card-text>

                <a :href="project.url" target="_blank" class="btn btn-primary">Website</a>
            </b-card>
        </vue-bar>
    </div>
</template>

<script>
    import vueBar from 'simplebar-vue';
    import '../assets/scss/Scrollbar.scss';

    export default {
        name: "Projects",
        data() {
            return {
                projects: [
                    {
                        name: 'MC ONE - OneGaming',
                        description: 'Selbstentwickeltes Gaming Netzwerk mit Minecraftserver, Teamspeak und Forum - noch in Entwicklung',
                        image: require('../assets/projects/mcone.png'),
                        url: 'https://www.mcone.eu'
                    },
                    {
                        name: 'MSL - Countdown',
                        description: 'Countdown zu den Abschlussprüfungen der Mittelschule Landau an der Isar',
                        image: require('../assets/projects/msl_countdown.png'),
                        url: 'https://msl.dominiklippl.de'
                    },
                    {
                        name: 'Dominiklippl.de',
                        description: 'Portfolio mit Informationen über mich als Person & Entwickler',
                        image: require('../assets/projects/dominiklippl_de.png'),
                        url: 'https://github.com/dominiklippl/dominiklippl'
                    }
                ]
            }
        },
        components: {
            vueBar
        }
    }
</script>

<style lang="scss">
    #projects {
        max-height: 500px;
        overflow-y: auto;
    }
</style>
