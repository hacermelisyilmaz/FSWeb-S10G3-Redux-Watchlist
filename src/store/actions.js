export const PREV_MOVIE = "Önceki filme geç";
export const NEXT_MOVIE = "Sonraki filme geç";
export const ADD_FAV = "Favoriye ekle";
export const REMOVE_FAV = "Favoriden çıkar";

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
