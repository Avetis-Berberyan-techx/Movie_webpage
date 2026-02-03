import {
  SORT_MAPPING,
  GENRES,
  RELEASE_TYPES,
  COUNTRIES,
  LANGUAGES,
  KEYWORDS,
} from "./constants.js";
import {
  sortSelectValue,
  searchAllCheckbox,
  streamCheckbox,
  freeCheckbox,
  adsCheckbox,
  rentCheckbox,
  buyCheckbox,
  searchAllReleasesCheckbox,
  searchAllCountriesCheckbox,
  releaseTypesContent,
  countryPicker,
  dateFromInput,
  dateToInput,
  genrePills,
  userScoreMin,
  userScoreMax,
  votes,
  runtimeMin,
  runtimeMax,
  languagePicker,
  searchButton,
  mainButton,
  loadMoreButton,
} from "./dom.js";
import { selectedKeywords } from "./ui.js";
import { discoverMovies } from "./api.js";
import { renderMovies } from "./render.js";

// Filter state
export const filters = {
  sort_by: SORT_MAPPING["Popularity Descending"],
  include_adult: false,
  include_video: false,
  page: 1,
};

export function buildFiltersFromUI() {
  filters.page = 1;
  filters.sort_by = SORT_MAPPING[sortSelectValue.innerHTML.trim()];

  // Availabilities
  if (!searchAllCheckbox.checked) {
    const checkedAvailabilities = [];
    [
      streamCheckbox,
      freeCheckbox,
      adsCheckbox,
      rentCheckbox,
      buyCheckbox,
    ].forEach((checkbox) => {
      if (checkbox.checked) {
        checkedAvailabilities.push(checkbox.value);
      }
    });
    filters.with_watch_monetization_types = checkedAvailabilities;
  } else {
    delete filters.with_watch_monetization_types;
  }

  // Releases
  if (!searchAllReleasesCheckbox.checked) {
    const releaseTypeCheckboxes =
      releaseTypesContent.querySelectorAll(".checkbox__input");
    const checkedReleaseTypes = [];

    releaseTypeCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const label = checkbox.parentElement.querySelector(".checkbox__label");
        const releaseId = RELEASE_TYPES[label.textContent];
        if (releaseId) {
          checkedReleaseTypes.push(releaseId);
        }
      }
    });

    filters.with_release_type = checkedReleaseTypes;

    if (!searchAllCountriesCheckbox.checked) {
      const countryValue =
        countryPicker.querySelector(".picker__value").textContent;
      if (countryValue !== "Select country") {
        filters.with_origin_country = COUNTRIES[countryValue];
      }
    } else {
      delete filters.with_origin_country;
    }
  } else {
    delete filters.with_release_type;
    delete filters.with_origin_country;
  }

  // Release dates
  if (dateFromInput.value !== "") {
    filters["primary_release_date.gte"] = dateFromInput.value;
  } else {
    delete filters["primary_release_date.gte"];
  }

  if (dateToInput.value !== "") {
    filters["primary_release_date.lte"] = dateToInput.value;
  } else {
    delete filters["primary_release_date.lte"];
  }

  // Genres
  const selectedGenres = [];
  genrePills.forEach((pill) => {
    if (pill.classList.contains("genre-pill--active")) {
      selectedGenres.push(GENRES[pill.textContent]);
    }
  });

  if (selectedGenres.length) {
    filters.with_genres = selectedGenres;
  } else {
    delete filters.with_genres;
  }

  // Rating, votes, runtime
  filters["vote_average.gte"] = userScoreMin.value;
  filters["vote_average.lte"] = userScoreMax.value;
  filters["vote_count.gte"] = votes.value;
  filters["with_runtime.gte"] = runtimeMin.value;
  filters["with_runtime.lte"] = runtimeMax.value;

  // Keywords
  const keywordIds = [...selectedKeywords]
    .map((keyword) => KEYWORDS[keyword])
    .filter(Boolean);

  if (keywordIds.length) {
    filters.with_keywords = keywordIds;
  } else {
    delete filters.with_keywords;
  }

  // Language
  const languageValue =
    languagePicker.querySelector(".picker__value").textContent;
  if (languageValue !== "Select language") {
    filters.with_original_language = LANGUAGES[languageValue];
  } else {
    delete filters.with_original_language;
  }
}

export function initializeSearchHandlers() {
  searchButton.addEventListener("click", () => {
    buildFiltersFromUI();

    discoverMovies(filters)
      .then((data) => {
        console.log(data.results);
        renderMovies(data.results);
      })
      .catch(console.error);
  });

  mainButton.addEventListener("click", () => {
    searchButton.click();
  });

  loadMoreButton.addEventListener("click", () => {
    filters.page += 1;
    discoverMovies(filters)
      .then((data) => {
        console.log(data.results);
        renderMovies(data.results, false);
      })
      .catch(console.error);
  });
}
