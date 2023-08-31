import { movies } from "../movies.js";
import { ADD_FAV, NEXT_MOVIE, PREV_MOVIE } from "./actions.js";

const initialState = {
  movies: movies,
  order: 0,
  favMovies: [
    {
      id: 8,
      title: "Memento",
      year: "2000",
      runtime: "113",
      genres: ["Mystery", "Thriller"],
      director: "Christopher Nolan",
      actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
      plot: "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
      posterUrl:
        "https://www.moviemem.com/wp-content/uploads/2020/07/MEMENTO1SH.jpg",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_MOVIE:
      if (state.order > 0) {
        return {
          ...state,
          order: state.order - 1,
        };
      } else {
        return {
          ...state,
          order: state.movies.length - 1,
        };
      }
    case NEXT_MOVIE:
      if (state.order < state.movies.length - 1) {
        return {
          ...state,
          order: state.order + 1,
        };
      } else {
        return {
          ...state,
          order: initialState.order,
        };
      }
    case ADD_FAV:
      const currentMovie = state.movies[state.order];
      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        //movies: state.movies.filter((m) => m.id !== currentMovie.id),
        //order: state.order === 0 ? 0 : state.order - 1,
      };
    default:
      return state;
  }
};

export default reducer;
