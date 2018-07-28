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

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn color="success" :disabled="!formIsValid"
                            type="submit">Create Meetup</v-btn>
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
    computed: {
        formIsValid () {
            return this.title !== '' &&
                this.location !== '' &&
                this.imageUrl !== '' &&
                this.description !== ''
        }
    },
    data () {
        return {
            title: '',
            location: '',
            imageUrl: '',
            description: ''
        }
    },
    methods: {
        onCreateMeetup () {
            const meetup_data = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                description: this.description,
                date: new Date()
            }
            this.$store.dispatch('createNewMeetup', meetup_data)
            this.$router.push('/meetups')
        }
    }
}
</script>
