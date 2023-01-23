import { firestore } from "../firebase/index";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { isProxy, toRaw } from 'vue';
import axios from "axios";

export const indexStore = defineStore("main", {
  state: () => ({
    shoppingcart: [],
    movies: [],
    isMovie: false,
    tempOptions: [],
  }),
  actions: {
    async populateFirestore() {
      const genres = new Map([
        [28, "Action"],
        [10751, "Family"],
        [878, "Science Fiction"],
        [12, "Adventure"],
        [14, "Fantasy"],
      ]);

      genres.forEach(async (value, key) => {
        let data = (
          await axios.get("https://api.themoviedb.org/3/discover/movie", {
            params: {
              api_key: "e06cb446302dcf3a3cb1358720141aad",
              with_genres: key,
              include_adult: false,
            },
          })
        ).data.results;
        data = data.map((movie) => {
          return {
            id: movie.id,
          };
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
    },
    async getMovies(genre) {
      this.tempOptions = toRaw((
        await getDoc(doc(firestore, "Genre", genre))
      ).data().data);

      this.movies.length = 0

      for (let i = 0; i < this.tempOptions.length; i++) {


        let search = axios.get(
          "https://api.themoviedb.org/3/movie/" + this.tempOptions[i].id,
          {
            params: {
              api_key: "e06cb446302dcf3a3cb1358720141aad",
              append_to_response: "videos",
              include_adult: false,
            },
          }
        );
        let searchResult = search.then((movieData) => {
          this.displayMovies({
            text: movieData.data.title,
            id: movieData.data.id,
            posterimage:
              "https://image.tmdb.org/t/p/w500" +
              movieData.data.poster_path,})
        });
      }
    },
    addItems(id) {
      this.shoppingcart.push(id);
    },
    displayMovies(text) {
      this.movies.push({
        text,
      });
    },
    finishedMovie() {
      this.isMovie = true;
    },
    removeMovieItem(arraySlot) {
      this.shoppingcart.splice(arraySlot, 1);
    },
    clearResultOption() {
      this.movies.length = 0;
    }
  },
});
// Methods can also be async
// Learn getters - modify state variables without actually changing them
