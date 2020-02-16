<template>
    <b-navbar toggleable="lg" type="dark" variant="transparent" fixed="top">
        <b-navbar-brand to="/Home">
            <b-img src="../assets/navProfile.png" rounded="circle"></b-img>
            Dominik
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/Biography">Biografie</b-nav-item>
                <b-nav-item to="/Projects">Projekte</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <!--            <b-navbar-nav class="ml-auto">-->
            <!--                -->
            <!--            </b-navbar-nav>-->
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'vueNav'
    }
</script>
