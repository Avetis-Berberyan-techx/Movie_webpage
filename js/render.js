// ======================
// Rendering Functions
// ======================

import { getColorFromPercent, formatDate } from "./utils.js";
import { moviesContainer } from "./dom.js";

/**
 * Render movies to the DOM
 */
export function renderMovies(data, reset = true) {
  if (reset) moviesContainer.innerHTML = "";

  data.forEach((movie) => {
    const imageUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
      : movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
        : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`;

    const degree = (Math.floor(movie.vote_average * 10) * 360) / 100;

    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
      <div class="movie-card__image-wrapper">
        <img class="movie-card__image" src="${imageUrl}" alt="${movie.title}" />
      </div>
      <div class="movie-card__rating-wrapper">
        <div class="movie-card__rating" style="background:conic-gradient(
    ${getColorFromPercent(Math.floor(movie.vote_average * 10))} 0deg ${degree}deg ,
    black 0);">
        <div class="movie-card__rating-value">${Math.floor(movie.vote_average * 10)}%</div>
      </div>
      </div>
      <div class="movie-card__content">
        <h3 class="movie-card__title">${movie.title}</h3>
        <p class="movie-card__date">${formatDate(movie.release_date) || "N/A"}</p>
        <p class="movie-card__description">${movie.overview ? movie.overview.slice(0, 100) + "..." : ""}</p>
      </div>
    `;

    moviesContainer.appendChild(movieCard);
  });
}
