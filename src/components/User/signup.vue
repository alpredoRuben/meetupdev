<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>

                <v-card>
                    <v-card-text>
                        <v-container>

                            <form @submit="onSignUp">
                                <!-- EMAIL FIELD -->
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <!-- PASSWORD FIELD -->
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <!-- CONFIRM PASSWORD FIELD -->
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="confirmPassword" label="Confirm Password" id="confirmPassword" v-model="confirmPassword" type="password" :rules="[comparePassword]"></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <!-- SIGN UP BUTTON SUBMIT -->
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit">Sign up</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>

                        </v-container>
                    </v-card-text>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Signup',
    data () {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        comparePassword () {
            return (this.password !== this.confirmPassword) ? 'Password do not match' : ''
        }
    },
    methods: {
        onSignUp () {

        }
    }
}
</script>
