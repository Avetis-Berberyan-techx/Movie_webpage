// ======================
// API Functions
// ======================

import { API_KEY } from "./constants.js";
import { getFilterURL } from "./utils.js";

/**
 * Fetch movies from TMDB API with given filter parameters
 */
export async function discoverMovies(params = {}) {
  const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&`;
  const filtersURL = getFilterURL(params);
  const url = `${baseUrl}${filtersURL}`;

  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`TMDB error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Discover Movies fetch failed:", err);
    throw err;
  }
}
