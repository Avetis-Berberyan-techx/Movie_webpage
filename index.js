//--------Sort------------------

//button of sort filter appearance
const sortButton = document.getElementById("sort-apearance-button");
//sort wrapper

const sortWrapper = document.querySelector(".sort__footer");

//sort selection block
const select = document.querySelector(".sort__footer--select");
const selected = select.querySelector(".sort__footer--selected");
const options = select.querySelector(".sort__footer--options");
const items = options.querySelectorAll("li");

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

selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    selected.textContent = item.textContent;
    options.style.display = "none";
    // Optional: store value
    // console.log('Selected value:', item.dataset.value);
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    options.style.display = "none";
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

searchAllReleases.addEventListener("change", () => {
  if (searchAllReleases.checked) {
    checkboxItemReleasesWrapper.style.display = "none";
    checkboxReleaseTypesWrapper.style.display = "none";
  } else {
    checkboxItemReleasesWrapper.style.display = "flex";
    checkboxReleaseTypesWrapper.style.display = "flex";
  }
});

//country releases
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

const pickerCountry = document.querySelector(".picker--country");

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
});

const fromPicker = new AirDatepicker(fromInput, {
  dateFormat: "yyyy-MM-dd",
  onSelect({ date }) {
    toPicker.update({
      minDate: date,
    });
  },
});

// 🔥 Open picker when clicking icon
fromBtn.addEventListener("click", () => {
  fromPicker.show();
});

toBtn.addEventListener("click", () => {
  toPicker.show();
});

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
  "bounty hunter": 801,
  holiday: 65,
  kidnapping: 1930,
  "santa claus": 1991,
  "polar bear": 6678,
  christmas: 207317,
  "action comedy": 247799,
  "family comedy": 298618,
  "fantasy comedy": 324005,
  admiring: 325761,
  celebratory: 325781,
  excited: 325811,
  fish: 1357,
  "sydney, australia": 5656,
  "parent child relationship": 970,
  anthropomorphism: 11477,
  harbor: 10026,
  underwater: 14785,
  shark: 15097,
  pelican: 33635,
  "fish tank": 33759,
  "great barrier reef": 33760,
  "sea turtle": 154896,
  "missing child": 156948,
  aftercreditsstinger: 179430,
  duringcreditsstinger: 179431,
  "short-term memory loss": 180557,
  clownfish: 180568,
  "father son reunion": 180574,
  "protective father": 181068,
  melodramatic: 325835,
};

const availableKeywords = Object.keys(KEYWORDS);

const wrapper = document.getElementById("keywordWrapper");
const input = document.getElementById("keywordInput");
const dropdown = document.getElementById("keywordDropdown");

const selectedKeywords = new Set();

// Focus input when clicking anywhere inside wrapper
wrapper.addEventListener("click", () => {
  input.focus();
});

function renderPills() {
  wrapper.querySelectorAll(".keyword-pill").forEach((p) => p.remove());

  selectedKeywords.forEach((kw) => {
    const pill = document.createElement("div");
    pill.className = "keyword-pill";
    pill.innerHTML = `
      ${kw}
      <button class="remove-btn" data-keyword="${kw}">×</button>
    `;
    wrapper.insertBefore(pill, input);
  });
}

function showDropdown(value) {
  dropdown.innerHTML = "";

  if (!value) {
    dropdown.style.display = "none";
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
      input.value = "";
      dropdown.style.display = "none";
      input.focus();
    });

    dropdown.appendChild(item);
  });

  dropdown.style.display = filtered.length ? "block" : "none";
}

input.addEventListener("input", () => {
  showDropdown(input.value.trim());
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const val = input.value.trim();
    if (val && !selectedKeywords.has(val)) {
      selectedKeywords.add(val);
      renderPills();
    }
    input.value = "";
    dropdown.style.display = "none";
  }
});

wrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    selectedKeywords.delete(e.target.dataset.keyword);
    renderPills();
    input.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
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

//API key
const API = "https://api.themoviedb.org/3/discover/movie";
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQ4Yzg5ZjI1OWU1YWVkMWRhM2VkZDgwODgyZmNmOSIsIm5iZiI6MTc2OTQxMjA4MC43NTksInN1YiI6IjY5NzcxNWYwNDQyNmMwYjlkODEwNmJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ymOXE-6xA21y1K6OGPXTP5rbTOdMECLxPdJzsQbgzrw";

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
  TVMovie: 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

async function fetchMovies(page = 1, ...filters) {
  // Default query parameters
  const params = new URLSearchParams({
    page: page,
    ...filters, // merge all filters
  });

  const url = `${API}?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}
// Example usage

const moviesContainer = document.querySelector(".movies");

const renderMovieCards = async (reset = true, page = 1, ...filters) => {
  if (reset) moviesContainer.innerHTML = "";

  data = await fetchMovies(page, ...filters);
  console.log(data.results);
};

// renderMovieCards();
