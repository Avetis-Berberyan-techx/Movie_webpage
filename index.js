//--------Sort------------------

//button of sort filter appearance
const sortButton = document.getElementById("sort-apearance-button");
//sort wrapper

const sortWrapper = document.querySelector(".sort__footer");

//sort selection block
const sortSelect = document.querySelector(".sort__footer--select");
const sortSelected = sortSelect.querySelector(".sort__footer--selected");
const sortOptions = sortSelect.querySelector(".sort__footer--options");
const sortItems = sortOptions.querySelectorAll("li");

//-----------filters------------

// Availabalities checkbox blocks

//checkboxes
const searchAll = document.getElementById("search_all");
const stream = document.getElementById("stream");
const free = document.getElementById("free");
const ads = document.getElementById("ads");
const rent = document.getElementById("rent");
const buy = document.getElementById("buy");

//disapearing checkboxes block
const availabilitiesBox = document.querySelector(".availabalities__box");

//-------------------------------------------
const filtersWrapper = document.querySelector(".filters__footer");
//button of sort filter appearance
const filtersButton = document.getElementById("filters-apearance-button");

sortSelected.addEventListener("click", () => {
  sortOptions.style.display =
    sortOptions.style.display === "block" ? "none" : "block";
});

sortItems.forEach((item) => {
  item.addEventListener("click", () => {
    sortSelected.textContent = item.textContent;
    sortOptions.style.display = "none";
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!sortSelect.contains(e.target)) {
    sortOptions.style.display = "none";
  }
});

// sort display
sortButton.addEventListener("click", () => {
  sortButton.classList.toggle("active");

  if (sortWrapper.style.display === "block") {
    sortWrapper.style.display = "none";
  } else {
    sortWrapper.style.display = "block";
  }
});
// filter display
filtersButton.addEventListener("click", () => {
  filtersButton.classList.toggle("active");

  if (filtersWrapper.style.display === "block") {
    filtersWrapper.style.display = "none";
  } else {
    filtersWrapper.style.display = "block";
  }
});

//Availabalities checkbox
searchAll.addEventListener("change", () => {
  if (searchAll.checked) {
    availabilitiesBox.style.display = "none";
  } else {
    availabilitiesBox.style.display = "block";
  }
});

const checkboxItemReleasesWrapper = document.querySelector(
  ".checkbox-item-country-releases",
);

const checkboxReleaseTypesWrapper = document.querySelector(".release-types");

//releases checkboxes
const searchAllReleases = document.getElementById("searchAllReleases");
const searchAllCountries = document.getElementById("searchAllCountries");
const pickerCountry = document.querySelector(".picker--country");

searchAllReleases.addEventListener("change", () => {
  if (searchAllReleases.checked) {
    checkboxItemReleasesWrapper.style.display = "none";
    checkboxReleaseTypesWrapper.style.display = "none";
    pickerCountry.style.display = "none";
    searchAllCountries.checked = true;
  } else {
    checkboxItemReleasesWrapper.style.display = "flex";
    checkboxReleaseTypesWrapper.style.display = "flex";
  }
});

//country releases and language picker
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

const countriesKeys = Object.keys(COUNTRIES);

const languageKeys = Object.keys(LANGUAGES);

const pickerCountrylist = document.querySelector(
  ".picker--country .picker__list",
);
const pickerLanguagelist = document.querySelector(
  ".picker--language .picker__list",
);

languageKeys.forEach((lang) => {
  pickerLanguagelist.insertAdjacentHTML(
    "beforeend",
    `
    <li class="picker__item">${lang}</li>
    `,
  );
});

countriesKeys.forEach((country) => {
  pickerCountrylist.insertAdjacentHTML(
    "beforeend",
    `
    <li class="picker__item">${country}</li>
    `,
  );
});

searchAllCountries.addEventListener("change", () => {
  if (!searchAllCountries.checked) {
    pickerCountry.style.display = "block";
  } else {
    pickerCountry.style.display = "none";
  }
});

document.querySelectorAll(".picker").forEach((picker) => {
  const button = picker.querySelector(".picker__button");
  const search = picker.querySelector(".picker__search");
  const items = picker.querySelectorAll(".picker__item");
  const value = picker.querySelector(".picker__value");

  button.addEventListener("click", () => {
    picker.classList.toggle("open");
    search.value = "";
    filter("");
    search.focus();
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      value.textContent = item.textContent;
      picker.classList.remove("open");
    });
  });

  search.addEventListener("input", (e) => {
    filter(e.target.value.toLowerCase());
  });

  function filter(q) {
    items.forEach((item) => {
      item.style.display = item.textContent.toLowerCase().includes(q)
        ? "block"
        : "none";
    });
  }
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".picker").forEach((picker) => {
    if (!picker.contains(e.target)) picker.classList.remove("open");
  });
});

//----------------------------

// date input

const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");

const fromBtn = document.getElementById("fromBtn");
const toBtn = document.getElementById("toBtn");

const toPicker = new AirDatepicker(toInput, {
  dateFormat: "yyyy-MM-dd",
  onSelect: () => {
    toPicker.hide(); // ✅ force close
  },
});

const fromPicker = new AirDatepicker(fromInput, {
  dateFormat: "yyyy-MM-dd",
  onSelect: ({ date }) => {
    toPicker.update({ minDate: date });
    fromPicker.hide(); // ✅ force close
  },
});

fromBtn.addEventListener("click", () => fromPicker.show());
toBtn.addEventListener("click", () => toPicker.show());

//Genres

const pills = document.querySelectorAll(".genre-pill");

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    pill.classList.toggle("is-active");
  });
});

// Example: get selected genres
function getSelectedGenres() {
  return [...document.querySelectorAll(".genre-pill.is-active")].map(
    (pill) => pill.textContent,
  );
}

//keyword
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

const availableKeywords = Object.keys(KEYWORDS);

const keywordWrapper = document.getElementById("keywordWrapper");
const keywordInput = document.getElementById("keywordInput");
const keywordDropdown = document.getElementById("keywordDropdown");

const selectedKeywords = new Set();

// Focus input when clicking anywhere inside wrapper
keywordWrapper.addEventListener("click", () => {
  keywordInput.focus();
});

function renderPills() {
  keywordWrapper.querySelectorAll(".keyword-pill").forEach((p) => p.remove());

  selectedKeywords.forEach((kw) => {
    const pill = document.createElement("div");
    pill.className = "keyword-pill";
    pill.innerHTML = `
      ${kw}
      <button class="remove-btn" data-keyword="${kw}">×</button>
    `;
    keywordWrapper.insertBefore(pill, keywordInput);
  });
}

function showDropdown(value) {
  keywordDropdown.innerHTML = "";

  if (!value) {
    keywordDropdown.style.display = "none";
    return;
  }

  const filtered = availableKeywords.filter(
    (k) => k.includes(value.toLowerCase()) && !selectedKeywords.has(k),
  );

  filtered.forEach((kw) => {
    const item = document.createElement("div");
    item.className = "keyword-item";
    item.textContent = kw;

    item.addEventListener("click", () => {
      selectedKeywords.add(kw);
      renderPills();
      keywordInput.value = "";
      keywordDropdown.style.display = "none";
      keywordInput.focus();
    });

    keywordDropdown.appendChild(item);
  });

  keywordDropdown.style.display = filtered.length ? "block" : "none";
}

keywordInput.addEventListener("input", () => {
  showDropdown(keywordInput.value.trim());
});

keywordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const val = keywordInput.value.trim();
    if (val && !selectedKeywords.has(val)) {
      selectedKeywords.add(val);
      renderPills();
    }
    keywordInput.value = "";
    keywordDropdown.style.display = "none";
  }
});

keywordWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    selectedKeywords.delete(e.target.dataset.keyword);
    renderPills();
    keywordInput.focus();
  }
});

document.addEventListener("click", (e) => {
  if (
    !keywordWrapper.contains(e.target) &&
    !keywordDropdown.contains(e.target)
  ) {
    keywordDropdown.style.display = "none";
  }
});

// range fill in
const userScoreMin = document.getElementById("userScoreMin");
const userScoreMax = document.getElementById("userScoreMax");
const userScoreRange = document.getElementById("userScoreRange");

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

// Minimum User Votes (single range)
const votes = document.getElementById("votes");
const votesRange = document.getElementById("votesRange");

function updateVotes() {
  const percent = (votes.value / 500) * 100;
  votesRange.style.left = "0%";
  votesRange.style.width = percent + "%";
}

votes.addEventListener("input", updateVotes);
updateVotes();

// Runtime (dual range)
const runtimeMin = document.getElementById("runtimeMin");
const runtimeMax = document.getElementById("runtimeMax");
const runtimeRange = document.getElementById("runtimeRange");

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

//fetching

// Genre mapping
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

// Release type mapping
const RELEASE_TYPES = {
  Premiere: 1,
  "Theatrical (limited)": 2,
  Theatrical: 3,
  Digital: 4,
  Physical: 5,
  TV: 6,
};

const getFilterURL = (filters) => {
  let url = "";
  for (let [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      // Join array values with commas
      url += `${key}=${value.map((v) => encodeURIComponent(v)).join("|")}&`;
    } else {
      url += `${key}=${encodeURIComponent(value)}&`;
    }
  }
  // Remove trailing '&' if it exists
  if (url.endsWith("&")) url = url.slice(0, -1);
  return url;
};

async function discoverMovies(params = {}) {
  const apiKey = "2de47dd8b744f69009564aec2ad06d07"; // ← Replace with your own TMDB API key
  const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&`;

  // Build query string
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

const moviesContainer = document.querySelector(".movies");

function renderMovies(data, reset = true) {
  if (reset) moviesContainer.innerHTML = "";

  data.forEach((obj) => {
    const imageUrl = obj.poster_path
      ? `https://image.tmdb.org/t/p/w780${obj.poster_path}`
      : obj.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${obj.backdrop_path}`
        : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`;
    let degree = (Math.floor(obj.vote_average * 10) * 360) / 100;
    moviesContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="movie-card">
            <div class="movie-card__image">
              <img
                class="movie-card__img"
                src="${imageUrl}
"
                alt="Movie Image"
              />
            </div>

            <div class="movie-card__rating" style="background:conic-gradient(#36a2eb 0deg ${degree}deg, #fff ${degree}deg 360deg);">
              <div class="movie-card__rating-circle">${Math.floor(obj.vote_average * 10)}%</div>
            </div>

            <div class="movie-card__data">
              <div class="movie-card__title">
                <h3 class="movie-card__title-text">${obj.title}</h3>
              </div>

              <div class="movie-card__date">
                <p class="movie-card__date-text">${obj.release_date}</p>
              </div>

              <div class="movie-card__description">
                <p class="movie-card__description-text">
                  ${obj.overview.slice(0, 100)}...
                </p>
              </div>
            </div>
          </div>
      `,
    );
  });
}
const SORT_TEXTS = {
  "Popularity Ascending": "popularity.asc",
  "Popularity Descending": "popularity.desc",
  "Rating Ascending": "vote_average.asc",
  "Rating Descending": "vote_average.desc",
  "Release Date Ascending": "primary_release_date.asc",
  "Release Date Descending": "primary_release_date.desc",
  "A-Z": "title.asc",
  "Z-A": "title.desc",
};

const movieFilterButton = document.getElementById("movie_filter");
const sortBy = document.querySelector(".sort");
const availabalities = [stream, free, ads, rent, buy];
const releaseTypes = document.querySelectorAll(".release-types .checkbox-item");
const genresList = document.querySelectorAll(".genres__list .genre-pill");
const pickerLanguageInput = document.querySelector(
  ".picker--language .picker__button .picker__value",
);
const loadmoreBtn = document.getElementById("loadmoreButton");

const filters = {
  sort_by: SORT_TEXTS[sortSelected.innerHTML], //
  include_adult: false,
  include_video: false,
  page: 1,
};

discoverMovies()
  .then((data) => {
    console.log(data.results);
    renderMovies(data.results);
  })
  .catch(console.error);

movieFilterButton.addEventListener("click", () => {
  filters["page"] = 1;
  filters["sort_by"] = SORT_TEXTS[sortSelected.innerHTML];

  // availabalities
  if (!searchAll.checked) {
    let tempchecked = [];
    availabalities.forEach((availabality) => {
      if (availabality.checked) {
        tempchecked.push(availabality.value);
      }
    });
    filters["with_watch_monetization_types"] = tempchecked;
  } else {
    delete filters["with_watch_monetization_types"];
  }
  //releases
  if (!searchAllReleases.checked) {
    let tempchecked = [];
    releaseTypes.forEach((type) => {
      if (type.getElementsByTagName("input")[0].checked) {
        let releaseId =
          RELEASE_TYPES[type.getElementsByTagName("label")[0].innerHTML];
        tempchecked.push(releaseId);
      }
    });
    filters["with_release_type"] = tempchecked;

    if (!searchAllCountries.checked) {
      const countryValue = pickerCountry.querySelector(
        ".picker__button .picker__value",
      ).innerHTML;

      filters["with_origin_country"] = COUNTRIES[countryValue];
    } else {
      delete filters["with_origin_country"];
    }
  } else {
    delete filters["with_release_type"];
    delete filters["with_origin_country"];
  }
  //release Date
  if (fromInput.value !== "") {
    filters["primary_release_date.gte"] = fromInput.value;
  } else {
    delete filters["primary_release_date.gte"];
  }
  if (toInput.value !== "") {
    filters["primary_release_date.lte"] = toInput.value;
  } else {
    delete filters["primary_release_date.lte"];
  }

  //Genres
  let tempchecked = [];
  genresList.forEach((genre) => {
    if (genre.classList.contains("is-active")) {
      tempchecked.push(GENRES[genre.innerHTML]);
    }
  });
  if (tempchecked.length) {
    filters["with_genres"] = tempchecked;
  } else {
    delete filters["with_genres"];
  }

  //rating,min vote count, runtime ranges
  filters["vote_average_gte"] = userScoreMin.value;
  filters["vote_average_lte"] = userScoreMax.value;
  filters["vote_count_gte"] = votes.value;
  filters["with_runtime_gte"] = runtimeMin.value;
  filters["with_runtime_lte"] = runtimeMax.value;
  let keywords = [...selectedKeywords];
  keywords = keywords.map((keyword) => {
    return KEYWORDS[keyword];
  });

  if (keywords.length) {
    filters["with_keywords"] = keywords;
  } else {
    delete filters["with_keywords"];
  }

  if (pickerLanguageInput.innerHTML !== "Select language") {
    filters["with_original_language"] =
      LANGUAGES[pickerLanguageInput.innerHTML];
  } else {
    delete filters["with_original_language"];
  }
  discoverMovies(filters)
    .then((data) => {
      console.log(data.results);
      renderMovies(data.results);
    })
    .catch(console.error);
});

loadmoreBtn.addEventListener("click", () => {
  filters.page += 1;
  discoverMovies(filters)
    .then((data) => {
      console.log(data.results);
      renderMovies(data.results, (reset = false));
    })
    .catch(console.error);
});
