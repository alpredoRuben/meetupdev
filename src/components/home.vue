<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="success">Explore Meetup</v-btn>
            </v-flex>

            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/new" class="success">Orginize Meetup</v-btn>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-2">
            <v-carousel style="cursor: pointer">
                <v-carousel-item v-for="meetup in meetupRooms" :key="meetup.id" :src="meetup.imageUrl"
                    reverse-transition="fade" transition="fade" @click.native="onLoadMeetup(meetup.id)">
                    <div class="title">{{ meetup.title }}</div>
                </v-carousel-item>
            </v-carousel>
        </v-layout>

        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm6 class="text-xs-center">
                <p>Welcome to home meetups</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        meetupRooms () {
            return this.$store.getters.getAllMeetups
        }
    },
    methods: {
        onLoadMeetup (id) {
            console.log(id)
            this.$router.push('/meetup/'+id);
        }
    }
}
</script>

<style scoped>
    .title {
        position: absolute;
        left:25%;
        right:25%;
        bottom: 50px;
        background-color: rgba(0,0,0,0.5);
        color: white;
        font-size: 1em;
        padding: 20px;
        text-align: center;
    }
</style>
