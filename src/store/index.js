import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
        id: '1',
        title: 'Vue js',
        date: '2017-08-15',
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
        id: '2',
        title: 'Angular',
        date: '2017-08-16',
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        id: '3',
        title: 'React js',
        date: '2017-08-19',
      },
    ],
    user: {
      id: 'asdfas12',
      registeredMeetups: ['1'],
    },
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) =>
        meetupA.date > meetupB.date,
      );
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId =>
        state.loadedMeetups.find(meetup =>
          meetup.id === meetupId,
        );
    },
  },
});

export default store;
