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

const selectWrapper = document.querySelector(".select-wrapper");
const dropdownMenu = document.querySelector(".dropdown-menu");
const selectArrow = document.querySelector(".select-arrow");
const selectText = document.querySelector(".select-text");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const selectedFlag = selectWrapper.querySelector(".flag-icon");
const searchInput = document.getElementById("countrySearch");
const checkboxItemReleasesWrapper = document.querySelector(
  ".checkbox-item-country-releases",
);

const checkboxReleaseTypesWrapper = document.querySelector(".release-types");

//releases checkboxes
const searchAllReleases = document.getElementById("searchAllReleases");
const searchAllCountries = document.getElementById("searchAllCountries");
const countrySelect = document.querySelector(".country-select");
searchAllReleases.addEventListener("change", () => {
  if (searchAllReleases.checked) {
    checkboxItemReleasesWrapper.style.display = "none";
    checkboxReleaseTypesWrapper.style.display = "none";
    countrySelect.style.display = "none";
  } else {
    checkboxItemReleasesWrapper.style.display = "flex";
    checkboxReleaseTypesWrapper.style.display = "flex";
  }
});

searchAllCountries.addEventListener("change", () => {
  if (searchAllCountries.checked) {
    countrySelect.style.display = "none";
  } else {
    countrySelect.style.display = "flex";
  }
});

// Toggle dropdown
selectWrapper.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("open");
  selectArrow.classList.toggle("open");
  if (dropdownMenu.classList.contains("open")) {
    setTimeout(() => searchInput.focus(), 100);
  }
});

// Prevent dropdown close when clicking search input
searchInput.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Filter countries based on search input
searchInput.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  dropdownItems.forEach((item) => {
    const country = item.getAttribute("data-country").toLowerCase();
    if (country.includes(filter)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

// Select country from dropdown
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    const country = this.getAttribute("data-country");
    const flagClone = this.querySelector(".flag-icon").cloneNode(true);

    selectedFlag.replaceWith(flagClone);
    selectText.textContent = country;

    dropdownMenu.classList.remove("open");
    selectArrow.classList.remove("open");
    searchInput.value = "";
    dropdownItems.forEach((i) => (i.style.display = "flex"));

    console.log("Selected country:", country);
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function () {
  dropdownMenu.classList.remove("open");
  selectArrow.classList.remove("open");
  searchInput.value = "";
  dropdownItems.forEach((i) => (i.style.display = "flex"));
});

// date input

