<template>
    <v-app>
        <v-navigation-drawer v-model="sideDrawer" fixed clipped app>
            <v-list dense>
                <v-list-tile v-for="item in menuItems" v-bind:key="item.title" router v-bind:to="item.link" active>
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item. title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar color="primary" dense fixed clipped-left app dark>
            <v-toolbar-side-icon @click.stop="sideDrawer = !sideDrawer"></v-toolbar-side-icon>
            <v-toolbar-title align-center>
                <router-link to="/" tag="span" style="cursor: pointer">Meet-Up Dev</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn v-for="item in menuItems" v-bind:key="item.title" router v-bind:to="item.link" flat>
                    <v-icon left>{{ item.icon }}</v-icon> {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <v-container grid-list-xs,sm,md,lg,xl>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            sideDrawer: false,
            menuItems: [
                { icon: 'supervisor_account', title: 'View Meetup', link: '/meetups' },
                { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
                { icon: 'person', title: 'Profil', link: '/profile' },
                { icon: 'face', title: 'Sign up', link: '/sign/up' },
                { icon: 'lock_open', title: 'Sign in', link: '/sign/in' }
            ]
        }
    }
}
</script>
