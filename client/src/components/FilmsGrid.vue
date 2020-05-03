<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
    <film-item-detail :film="selectedFilm"></film-item-detail>
  </div>
</template>

<script>
import FilmGridItem from './FilmGridItem'
import {eventBus} from '@/main.js'
import MoviesService from '@/services/MoviesService.js'
import FilmItemDetail from './FilmItemDetail'

export default {
  data(){
    return {
      films: [],
      selectedFilm: null
    };
  },
  mounted(){
    MoviesService.getFilms()
    .then(films => this.films = films)

    eventBus.$on('film-deleted', (id) => {
      const index = this.films.findIndex(film => film._id === id);
      this.films.splice(index, 1);
      })

    eventBus.$on('film-selected', (id) => {
      console.log(id);
      this.selectedFilm = this.films.find(film => film._id === id);
      })
  },
  components: {
    'film-grid-item': FilmGridItem,
    'film-item-detail': FilmItemDetail
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
