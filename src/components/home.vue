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
            <v-carousel>
            <v-carousel-item v-for="meetup in meetupRooms" :key="meetup.id" :src="meetup.imageUrl"
                reverse-transition="fade" transition="fade">
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
    data () {
        return {
            meetupRooms: [
                {
                    id:'img001',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Tar-meeting-room.jpg',
                    title: 'Taar Meeting Room Public'
                },
                {
                    id:'img002',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Valpr%C3%A9_Meeting_Room.JPG',
                    title: 'Val Valpre Room Executive'
                },
                {
                    id:'img003',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Meeting_room_for_working_groups.JPG',
                    title: 'High Class Group Meeting Room'
                },
                {
                    id:'img004',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/UN_Geneva_Human_Rights_and_Alliance_of_Civilizations_Room.jpg',
                    title: 'Alliance Perform Geneva Meet Rooms'
                }
            ]
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
