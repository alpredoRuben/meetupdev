import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/home'
import CreateMeetupPage from '@/components/Meetup/create_meetup'
import MeetupsPage from '@/components/Meetup/meetups'
import ProfilePage from '@/components/User/profile'
import SignUpPage from '@/components/User/signup'
import SignInPage from '@/components/User/signin'
import SingleMeetupPage from '@/components/Meetup/single_meetup'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: { path: 'home' }
        },
        {
            path: '/home',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/meetups',
            name: 'Meetups',
            component: MeetupsPage
        },
        {
            path: '/meetup/new',
            name: 'CreateMeetup',
            component: CreateMeetupPage
        },
        {
            path: '/meetup/:id',
            name: 'SingleMeetup',
            props: true,
            component: SingleMeetupPage
        },
        {
            path: '/profile',
            name: 'Profile',
            component: ProfilePage
        },
        {
            path: '/sign/up',
            name: 'Signup',
            component: SignUpPage
        },
        {
            path: '/sign/in',
            name: 'Signin',
            component: SignInPage
        }
    ],
    mode: 'history'
})
