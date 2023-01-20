import { firestore } from "../firebase/index";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import axios from "axios";

export const indexStore = defineStore("main", {
  state: () => ({
    shoppingcart: [],
    movies: [],
    startup: 0,
    testcount: 0,
    isMovie: false,
  }),
  actions: {
    async populateFirestore() {
      const genres = new Map([[28, "Action"], [10751, "Family"], [878, "Science Fiction"], [12, "Adventure"], [14, "Fantasy"]]);

      genres.forEach(async (value, key) => {
        let data = (await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "e06cb446302dcf3a3cb1358720141aad",
            with_genres: key,
            include_adult: false,
          }
        })).data.results;
        data = data.map((movie) => {
          return {
            id: movie.id,
          }
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
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
    this.shoppingcart.splice(arraySlot, 1)
    },
  },
});
// Methods can also be async
// Learn getters - modify state variables without actually changing them
