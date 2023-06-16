import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, { fetchMoviesData } from "./state";


const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

store.dispatch(fetchMoviesData());

export default store;
