<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="carousel-title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center text-sm-center">
        <p>Join meetups</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        meetups: [
          {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
            id: '1',
            title: 'Vue js',
          },
          {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
            id: '2',
            title: 'Angular',
          },
          {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
            id: '3',
            title: 'React js',
          },
        ],
      };
    },
  };
</script>

<style>
  .carousel-title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 10px;
  }
</style>
