<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <h3 class="success--text">CREATE A NEW MEETUP ROOMS</h3>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <!--  TITLE INPUT FIELD -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="title"
                                label="Title"
                                id="title" v-model="title" required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <!-- LOCATION INPUT FIELD  -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="location"
                                label="Location"
                                id="location" v-model="location" required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <!-- IMAGE URL INPUT FIELD  -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="imageUrl"
                                label="Image URL"
                                id="image-url" v-model="imageUrl" required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <!-- IMAGE VIEWER  -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="190">
                        </v-flex>
                    </v-layout>


                    <!-- DESCRIPTION TEXT FIELD  -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="description"
                                label="Description"
                                multi-line
                                id="description" v-model="description" required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <!-- DESCRIPTION TEXT FIELD  -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-date-picker v-model="date" color="success"></v-date-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout row class="mb-2">
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker v-model="time" format="24hr"></v-time-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn color="success" :disabled="!formIsValid"
                            type="submit">Create Meetup</v-btn>
                            {{ submitableDateTime }}
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'CreateMeetup',
    data () {
        return {
            title: '',
            location: '',
            imageUrl: '',
            description: '',
            date: null,
            time: new Date()
        }
    },
    computed: {
        formIsValid () {
            return this.title !== '' &&
                this.location !== '' &&
                this.imageUrl !== '' &&
                this.description !== ''
        },
        submitableDateTime () {
            const date = new Date(this.time)
            if(typeof this.time === "string") {
                let hours = this.time.match(/^(\d+)/)[1]
                const minutes = this.time.match(/:(\d+)/)[1]
                date.setHours(hours)
                date.setMinutes(minutes)
            }
            else {
                date.setHours(this.time.getHours())
                date.setMinutes(this.time.getMinutes())
            }
            return date;
        }
    },
    methods: {
        onCreateMeetup () {
            const meetup_data = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                description: this.description,
                date: this.submitableDateTime
            }
            this.$store.dispatch('createNewMeetup', meetup_data)
            this.$router.push('/meetups')
        },
    }
}
</script>
