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
const searchAllCountries = document.getElementById("searchAllCountries");
// TODO
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
