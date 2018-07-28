import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        dataMeetupRooms: [
            {
                id:'img001',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Tar-meeting-room.jpg',
                title: 'Taar Meeting Room Public',
                date: '09-07-2018'
            },
            {
                id:'img002',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Valpr%C3%A9_Meeting_Room.JPG',
                title: 'Val Valpre Room Executive',
                date: '19-07-2018'
            },
            {
                id:'img003',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Meeting_room_for_working_groups.JPG',
                title: 'High Class Group Meeting Room',
                date: '01-07-2018'
            },
            {
                id:'img004',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/UN_Geneva_Human_Rights_and_Alliance_of_Civilizations_Room.jpg',
                title: 'Alliance Perform Geneva Meet Rooms',
                date: '23-07-2018'
            }
        ],
        dataUsers: {
            id: 'user1',
            registeredMeetup: 'userreg01'
        }
    },
    mutations: {},
    actions: {},
    getters: {
        getSortMeetups (state) {
            return state.dataMeetupRooms.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            });
        },
        getAllMeetups (state, getters) {
            return getters.getSortMeetups.slice(0,5)
        },
        getSingleMeetup (state) {
            console.log(state) //record seluruh data meetuprooms
            return (meetupID) => {
                console.log(meetupID) // id meetuproom yang dicari
                return state.dataMeetupRooms.find((meetup) => {
                    console.log(meetup) //record data yg sama dengan id pilihan
                    return meetup.id === meetupID
                })
            }
        }
    }
})
