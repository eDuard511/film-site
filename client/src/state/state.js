import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';



const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isMenuOpen: false,
    data: [],
    search: "",
    searchArray: [],
    favorites: [],
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSearchArray: (state, action) => {
      state.searchArray = action.payload;
    },
    addToFavorites: (state, action) => {
      const movie = action.payload;
      if (!state.favorites.includes(movie)) {
        state.favorites.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      const movie = action.payload;
      state.favorites = state.favorites.filter(
        (favMovie) => favMovie.id !== movie.id
      );
    },
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setData,
  setSearch,
  setSearchArray,
  addToFavorites,
  removeFromFavorites,
  setIsMenuOpen,
  setUser,
  setLoading,
  setError
} = moviesSlice.actions;

export const fetchMoviesData = () => async (dispatch) => {
  try {
    const collectionRef = collection(db, "movies"); // Reference the "movies" collection
    const querySnapshot = await getDocs(collectionRef); // Fetch all documents in the collection
    const moviesData = querySnapshot.docs.map((doc) => doc.data()); // Extract the data from each document

    dispatch(setData(moviesData));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const searchMovies = () => (dispatch, getState) => {
  const { movies } = getState();
  const filteredArray = movies.data.filter((word) =>
    word.title.toLowerCase().includes(movies.search.toLowerCase())
  );
  dispatch(setSearchArray(filteredArray));
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    dispatch(setUser(user));
    dispatch(setLoading(false));
  } catch (error) {
    const errorMessage = error.message;
    dispatch(setError(errorMessage));
    dispatch(setLoading(false));
    console.log(errorMessage);
  }
};


export default moviesSlice.reducer;
