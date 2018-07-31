<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>

                <v-card>
                    <v-card-title primary-title>
                        <h3 class="secondary--text">{{ meetupRoom.title }}</h3>
                    </v-card-title>

                    <v-card-media height="400px"
                        :src="meetupRoom.imageUrl">
                    </v-card-media>

                    <v-card-text>
                        <div class="success--text mb-2">{{ meetupRoom.date | dateTemplate }} - {{ meetupRoom.location}}</div>
                        <div>
                            {{ meetupRoom.description }}
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Register</v-btn>
                    </v-card-actions>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'SingleMeetup',
    props: ['id'],
    computed: {
        meetupRoom () {
            return this.$store.getters.getSingleMeetup(this.id)
        }
    },
}
</script>

<style scoped>
</style>
