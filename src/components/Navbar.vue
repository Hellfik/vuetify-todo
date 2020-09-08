<template>
    <nav>
        <v-snackbar v-model="snackbar" outline top :timeout="3000" color="success">
            Awesome, you added a new project 👍
            <v-icon left></v-icon>
            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-app-bar class="primary" flat app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Todo </span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    v-bind="attrs"
                    v-on="on"
                    text
                    class="white--text"
                    >
                    Menu
                    </v-btn>
                    <v-icon left color="white">mdi-menu-down</v-icon>
                </template>
                <v-list flat>
                    <v-list-item
                    v-for="(link, index) in links"
                    :key="index" router :to="link.path" 
                    >
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="white">
                <span>Sign in</span>
                <v-icon right>
                    mdi-logout
                </v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" class="primary" app>
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1">The Ninja Net</p>
                </v-flex>
                <v-flex class="mt-4">
                    <Popup @projectAdded="snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list v-for="(link, index) in links" :key="index">
                <v-list-item router :to="link.path">
                    <v-list-item-avatar>
                        <v-icon class="white--text">
                            {{ link.icon}}
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'mdi-home', text: 'Dashboard', path: '/'},
                {icon: 'mdi-folder', text: 'My projects', path: '/projects'},
                {icon: 'mdi-account', text: 'Team', path: '/team'},
                
            ],
            snackbar: false

        }
    },
    components: { Popup },
}
</script>

<style scoped>
.v-list-item--active{
    color: #9652ff !important;
}
</style>