<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info mb-2" v-for="meetup in meetupRooms" :key="meetup.id">

                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media height="130px" :src="meetup.imageUrl"></v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2 class="white--text" mb-0>{{ meetup.title }}</h2>
                                        <div>{{ meetup.date | dateTemplate}}</div>
                                    </div>
                                </v-card-title>

                                <v-card-actions>
                                    <v-btn flat :to="'/meetup/' + meetup.id">
                                        <v-icon left>arrow_forward</v-icon> view meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Meetups',
    computed: {
        meetupRooms () {
            return this.$store.getters.getSortMeetups
        }
    },
    data () {
        return {

        }
    }
}
</script>
