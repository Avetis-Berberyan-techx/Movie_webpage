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
const pickerCountry = document.querySelector(".picker--country");

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

// Language

//keyword

const availableKeywords = [
  "restaurant",
  "cafe",
  "bar",
  "hotel",
  "museum",
  "park",
  "beach",
  "shopping",
  "gym",
  "spa",
  "vegan",
  "pet-friendly",
  "luxury",
  "budget",
];

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
