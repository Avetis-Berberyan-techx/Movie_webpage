// ======================
// Constants
// ======================
const LANGUAGES = {
  English: "en",
  Spanish: "es",
  French: "fr",
  German: "de",
  Italian: "it",
  Portuguese: "pt",
  Russian: "ru",
  Japanese: "ja",
  Korean: "ko",
  Chinese: "zh",
  Hindi: "hi",
  Arabic: "ar",
  Turkish: "tr",
  Persian: "fa",
  Polish: "pl",
  Dutch: "nl",
  Swedish: "sv",
  Norwegian: "no",
  Danish: "da",
  Finnish: "fi",
  Greek: "el",
  Hebrew: "he",
  Thai: "th",
  Vietnamese: "vi",
  Indonesian: "id",
  Ukrainian: "uk",
  Hungarian: "hu",
  Czech: "cs",
  Romanian: "ro",
  Bulgarian: "bg",
  Serbian: "sr",
  Slovak: "sk",
  Slovenian: "sl",
  Estonian: "et",
  Latvian: "lv",
  Lithuanian: "lt",
  Georgian: "ka",
  Armenian: "hy",
};

const COUNTRIES = {
  USA: "US",
  UK: "GB",
  Canada: "CA",
  France: "FR",
  Germany: "DE",
  Italy: "IT",
  Spain: "ES",
  Portugal: "PT",
  Russia: "RU",
  Japan: "JP",
  SouthKorea: "KR",
  China: "CN",
  India: "IN",
  Iran: "IR",
  Turkey: "TR",
  Brazil: "BR",
  Mexico: "MX",
  Argentina: "AR",
  Australia: "AU",
  NewZealand: "NZ",
  Sweden: "SE",
  Norway: "NO",
  Denmark: "DK",
  Finland: "FI",
  Netherlands: "NL",
  Belgium: "BE",
  Switzerland: "CH",
  Austria: "AT",
  Poland: "PL",
  Ukraine: "UA",
  Romania: "RO",
  Bulgaria: "BG",
  Greece: "GR",
  Israel: "IL",
  Egypt: "EG",
  SouthAfrica: "ZA",
  Armenia: "AM",
  Georgia: "GE",
};

const GENRES = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

const RELEASE_TYPES = {
  Premiere: 1,
  "Theatrical (limited)": 2,
  Theatrical: 3,
  Digital: 4,
  Physical: 5,
  TV: 6,
};

const KEYWORDS = {
  superhero: 9715,
  "based on novel": 818,
  sequel: 523,
  prequel: 414,
  remake: 968,
  reboot: 9748,
  friendship: 6054,
  love: 9840,
  revenge: 9748,
  betrayal: 6054,
  "time travel": 4379,
  dystopia: 4565,
  post_apocalyptic: 4458,
  future: 9831,
  war: 1956,
  military: 4165,
  politics: 6054,
  biography: 9672,
  true_story: 9672,
  sports: 180547,
  "martial arts": 779,
  boxing: 9743,
  zombie: 12377,
  vampire: 3133,
  alien: 9951,
  monster: 947,
  anime: 210024,
  "based on manga": 206563,
  "based on comic": 9715,
  heist: 10349,
  spy: 470,
  detective: 703,
};

const SORT_MAPPING = {
  "Popularity Ascending": "popularity.asc",
  "Popularity Descending": "popularity.desc",
  "Rating Ascending": "vote_average.asc",
  "Rating Descending": "vote_average.desc",
  "Release Date Ascending": "primary_release_date.asc",
  "Release Date Descending": "primary_release_date.desc",
  "A-Z": "title.asc",
  "Z-A": "title.desc",
};

const API_KEY = "2de47dd8b744f69009564aec2ad06d07";

// ======================
// DOM Elements
// ======================
// Sort elements
const sortToggle = document.getElementById("sortToggleButton");
const sortBody = document.getElementById("sortBody");
const sortSelect = document.getElementById("sortSelect");
const sortSelectButton = sortSelect.querySelector(".select__button");
const sortSelectValue = sortSelect.querySelector(".select__value");
const sortDropdown = sortSelect.querySelector(".select__dropdown");
const sortOptions = sortSelect.querySelectorAll(".select__option");

// Filter elements
const filtersToggle = document.getElementById("filtersToggleButton");
const filtersBody = document.getElementById("filtersBody");

// Availability checkboxes
const searchAllCheckbox = document.getElementById("searchAll");
const availabilitiesContent = document.getElementById("availabilitiesContent");
const streamCheckbox = document.getElementById("stream");
const freeCheckbox = document.getElementById("free");
const adsCheckbox = document.getElementById("ads");
const rentCheckbox = document.getElementById("rent");
const buyCheckbox = document.getElementById("buy");

// Release checkboxes
const searchAllReleasesCheckbox = document.getElementById("searchAllReleases");
const searchAllCountriesCheckbox =
  document.getElementById("searchAllCountries");
const searchCountriesCheckbox = document.getElementById(
  "searchCountriesCheckbox",
);
const releaseTypesContent = document.getElementById("releaseTypesContent");
const countryPicker = document.getElementById("countryPicker");
const languagePicker = document.getElementById("languagePicker");

// Date inputs
const dateFromInput = document.getElementById("dateFrom");
const dateToInput = document.getElementById("dateTo");
const dateFromButton = document.getElementById("dateFromButton");
const dateToButton = document.getElementById("dateToButton");

// Genre pills
const genrePills = document.querySelectorAll(".genre-pill");

// Range sliders
const userScoreMin = document.getElementById("userScoreMin");
const userScoreMax = document.getElementById("userScoreMax");
const userScoreRange = document.getElementById("userScoreRange");
const votes = document.getElementById("votes");
const votesRange = document.getElementById("votesRange");
const runtimeMin = document.getElementById("runtimeMin");
const runtimeMax = document.getElementById("runtimeMax");
const runtimeRange = document.getElementById("runtimeRange");

// Keywords
const keywordsWrapper = document.getElementById("keywordsWrapper");
const keywordsInput = document.getElementById("keywordsInput");
const keywordsDropdown = document.getElementById("keywordsDropdown");
const selectedKeywords = new Set();

// Buttons
const searchButton = document.getElementById("searchButton");
const loadMoreButton = document.getElementById("loadMoreButton");
const mainButton = document.getElementById("mainBtn");
// Movies container
const moviesContainer = document.getElementById("moviesContainer");

// Filter state
const filters = {
  sort_by: SORT_MAPPING["Popularity Descending"],
  include_adult: false,
  include_video: false,
  page: 1,
};

// ======================
// Sort Functionality
// ======================
sortToggle.addEventListener("click", () => {
  sortToggle.classList.toggle("sort__toggle--active");
  sortBody.classList.toggle("sort__body--visible");
});

sortSelectButton.addEventListener("click", () => {
  sortDropdown.classList.toggle("select__dropdown--visible");
});

sortOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sortSelectValue.textContent = option.textContent;
    sortDropdown.classList.remove("select__dropdown--visible");
  });
});

document.addEventListener("click", (e) => {
  if (!sortSelect.contains(e.target)) {
    sortDropdown.classList.remove("select__dropdown--visible");
  }
});

//Search button observer
const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      mainButton.style.display = "block";
    } else {
      mainButton.style.display = "none";
    }
  },
  {
    threshold: 0,
  },
);

// making available search buttons
sortBody.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    searchButton.disabled = false;
    mainButton.disabled = false;
    observer.observe(searchButton);
  }
});

filtersBody.addEventListener("click", (e) => {
  const el = e.target;

  if (el.matches("button") || el.matches("input") || el.matches("select")) {
    searchButton.disabled = false;
    mainButton.disabled = false;
    observer.observe(searchButton);
  }
});

// ======================
// Filters Functionality
// ======================
filtersToggle.addEventListener("click", () => {
  filtersToggle.classList.toggle("filters__toggle--active");
  filtersBody.classList.toggle("filters__body--visible");
});

// Availability toggles
searchAllCheckbox.addEventListener("change", () => {
  if (searchAllCheckbox.checked) {
    availabilitiesContent.classList.remove("filter-group__content--visible");
  } else {
    availabilitiesContent.classList.add("filter-group__content--visible");
  }
});

// Release toggles
searchAllReleasesCheckbox.addEventListener("change", () => {
  if (searchAllReleasesCheckbox.checked) {
    searchCountriesCheckbox.classList.remove("checkbox--nested-visible");
    releaseTypesContent.classList.remove("filter-group__content--visible");
    countryPicker.classList.add("picker--hidden");
    searchAllCountriesCheckbox.checked = true;
  } else {
    searchCountriesCheckbox.classList.add("checkbox--nested-visible");
    releaseTypesContent.classList.add("filter-group__content--visible");
  }
});

searchAllCountriesCheckbox.addEventListener("change", () => {
  if (!searchAllCountriesCheckbox.checked) {
    countryPicker.classList.remove("picker--hidden");
  } else {
    countryPicker.classList.add("picker--hidden");
  }
});

// ======================
// Picker Functionality
// ======================
function initializePicker(pickerElement, items) {
  const button = pickerElement.querySelector(".picker__button");
  const search = pickerElement.querySelector(".picker__search");
  const list = pickerElement.querySelector(".picker__list");
  const value = pickerElement.querySelector(".picker__value");

  // Populate list
  Object.keys(items).forEach((item) => {
    const li = document.createElement("li");
    li.className = "picker__item";
    li.textContent = item;
    list.appendChild(li);
  });

  const listItems = list.querySelectorAll(".picker__item");

  button.addEventListener("click", () => {
    pickerElement.classList.toggle("picker--open");
    search.value = "";
    filterItems("");
    if (pickerElement.classList.contains("picker--open")) {
      search.focus();
    }
  });

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      value.textContent = item.textContent;
      pickerElement.classList.remove("picker--open");
    });
  });

  search.addEventListener("input", (e) => {
    filterItems(e.target.value.toLowerCase());
  });

  function filterItems(query) {
    listItems.forEach((item) => {
      item.style.display = item.textContent.toLowerCase().includes(query)
        ? "block"
        : "none";
    });
  }
}

// Close pickers when clicking outside
document.addEventListener("click", (e) => {
  document.querySelectorAll(".picker").forEach((picker) => {
    if (!picker.contains(e.target)) {
      picker.classList.remove("picker--open");
    }
  });
});

// Initialize pickers
initializePicker(countryPicker, COUNTRIES);
initializePicker(languagePicker, LANGUAGES);

// ======================
// Date Picker Functionality
// ======================
const toPicker = new AirDatepicker(dateToInput, {
  dateFormat: "yyyy-MM-dd",
  onSelect: () => {
    toPicker.hide();
  },
});

const fromPicker = new AirDatepicker(dateFromInput, {
  dateFormat: "yyyy-MM-dd",
  onSelect: ({ date }) => {
    toPicker.update({ minDate: date });
    fromPicker.hide();
  },
});

dateFromButton.addEventListener("click", () => fromPicker.show());
dateToButton.addEventListener("click", () => toPicker.show());

// ======================
// Genre Pills Functionality
// ======================
genrePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    pill.classList.toggle("genre-pill--active");
  });
});

// ======================
// Range Sliders Functionality
// ======================
function updateUserScore() {
  let min = parseFloat(userScoreMin.value);
  let max = parseFloat(userScoreMax.value);

  if (min > max) {
    [min, max] = [max, min];
    userScoreMin.value = min;
    userScoreMax.value = max;
  }

  const percent1 = (min / 10) * 100;
  const percent2 = (max / 10) * 100;

  userScoreRange.style.left = percent1 + "%";
  userScoreRange.style.width = percent2 - percent1 + "%";
}

userScoreMin.addEventListener("input", updateUserScore);
userScoreMax.addEventListener("input", updateUserScore);
updateUserScore();

function updateVotes() {
  const percent = (votes.value / 500) * 100;
  votesRange.style.left = "0%";
  votesRange.style.width = percent + "%";
}

votes.addEventListener("input", updateVotes);
updateVotes();

function updateRuntime() {
  let min = parseInt(runtimeMin.value);
  let max = parseInt(runtimeMax.value);

  if (min > max) {
    [min, max] = [max, min];
    runtimeMin.value = min;
    runtimeMax.value = max;
  }

  const percent1 = (min / 360) * 100;
  const percent2 = (max / 360) * 100;

  runtimeRange.style.left = percent1 + "%";
  runtimeRange.style.width = percent2 - percent1 + "%";
}

runtimeMin.addEventListener("input", updateRuntime);
runtimeMax.addEventListener("input", updateRuntime);
updateRuntime();

// ======================
// Keywords Functionality
// ======================
const availableKeywords = Object.keys(KEYWORDS);

keywordsWrapper.addEventListener("click", () => {
  keywordsInput.focus();
});

function renderKeywordPills() {
  keywordsWrapper
    .querySelectorAll(".keywords__pill")
    .forEach((p) => p.remove());

  selectedKeywords.forEach((keyword) => {
    const pill = document.createElement("div");
    pill.className = "keywords__pill";
    pill.innerHTML = `
      ${keyword}
      <button class="keywords__remove" data-keyword="${keyword}">×</button>
    `;
    keywordsWrapper.insertBefore(pill, keywordsInput);
  });
}

function showKeywordDropdown(value) {
  keywordsDropdown.innerHTML = "";

  if (!value) {
    keywordsDropdown.classList.remove("keywords__dropdown--visible");
    return;
  }

  const filtered = availableKeywords.filter(
    (k) =>
      k.toLowerCase().includes(value.toLowerCase()) && !selectedKeywords.has(k),
  );

  filtered.forEach((keyword) => {
    const item = document.createElement("div");
    item.className = "keywords__dropdown-item";
    item.textContent = keyword;

    item.addEventListener("click", () => {
      selectedKeywords.add(keyword);
      renderKeywordPills();
      keywordsInput.value = "";
      keywordsDropdown.classList.remove("keywords__dropdown--visible");
      keywordsInput.focus();
    });

    keywordsDropdown.appendChild(item);
  });

  if (filtered.length) {
    keywordsDropdown.classList.add("keywords__dropdown--visible");
  } else {
    keywordsDropdown.classList.remove("keywords__dropdown--visible");
  }
}

keywordsInput.addEventListener("input", () => {
  showKeywordDropdown(keywordsInput.value.trim());
});

keywordsInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const val = keywordsInput.value.trim();
    if (val && !selectedKeywords.has(val)) {
      selectedKeywords.add(val);
      renderKeywordPills();
    }
    keywordsInput.value = "";
    keywordsDropdown.classList.remove("keywords__dropdown--visible");
  }
});

keywordsWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("keywords__remove")) {
    selectedKeywords.delete(e.target.dataset.keyword);
    renderKeywordPills();
    keywordsInput.focus();
  }
});

document.addEventListener("click", (e) => {
  if (
    !keywordsWrapper.contains(e.target) &&
    !keywordsDropdown.contains(e.target)
  ) {
    keywordsDropdown.classList.remove("keywords__dropdown--visible");
  }
});

// ======================
// API Functions
// ======================
function getFilterURL(filterParams) {
  let url = "";
  for (let [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value)) {
      url += `${key}=${value.map((v) => encodeURIComponent(v)).join("|")}&`;
    } else {
      url += `${key}=${encodeURIComponent(value)}&`;
    }
  }
  if (url.endsWith("&")) url = url.slice(0, -1);
  return url;
}

async function discoverMovies(params = {}) {
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

function getColorFromPercent(percent) {
  percent = Math.max(0, Math.min(100, percent));

  let r, g, b;

  if (percent < 50) {
    // red -> yellow
    r = 255;
    g = Math.round(255 * (percent / 50));
    b = 0;
  } else {
    // yellow -> green
    r = Math.round(255 * (1 - (percent - 50) / 50));
    g = 255;
    b = 0;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

function renderMovies(data, reset = true) {
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
        <p class="movie-card__date">${movie.release_date || "N/A"}</p>
        <p class="movie-card__description">${movie.overview ? movie.overview.slice(0, 100) + "..." : ""}</p>
      </div>
    `;

    moviesContainer.appendChild(movieCard);
  });
}

// ======================
// Search & Filter Functionality
// ======================

searchButton.addEventListener("click", () => {
  filters.page = 1;
  console.log(sortSelectValue.innerHTML);
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
        // console.log(checkbox.value);
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

// ======================
// Initial Load
// ======================
discoverMovies(filters)
  .then((data) => {
    console.log(data.results);
    renderMovies(data.results);
  })
  .catch(console.error);
