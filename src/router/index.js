import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/home'
import CreateMeetupPage from '@/components/Meetup/create_meetup'
import MeetupsPage from '@/components/Meetup/meetups'
import ProfilePage from '@/components/User/profile'
import SignUpPage from '@/components/User/signup'
import SignInPage from '@/components/User/signin'


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
