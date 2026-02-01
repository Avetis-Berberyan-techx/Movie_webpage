// ======================
// DOM Elements
// ======================

// Sort elements
export const sortToggle = document.getElementById("sortToggleButton");
export const sortBody = document.getElementById("sortBody");
export const sortSelect = document.getElementById("sortSelect");
export const sortSelectButton = sortSelect.querySelector(".select__button");
export const sortSelectValue = sortSelect.querySelector(".select__value");
export const sortDropdown = sortSelect.querySelector(".select__dropdown");
export const sortOptions = sortSelect.querySelectorAll(".select__option");

// Filter elements
export const filtersToggle = document.getElementById("filtersToggleButton");
export const filtersBody = document.getElementById("filtersBody");

// Availability checkboxes
export const searchAllCheckbox = document.getElementById("searchAll");
export const availabilitiesContent = document.getElementById("availabilitiesContent");
export const streamCheckbox = document.getElementById("stream");
export const freeCheckbox = document.getElementById("free");
export const adsCheckbox = document.getElementById("ads");
export const rentCheckbox = document.getElementById("rent");
export const buyCheckbox = document.getElementById("buy");

// Release checkboxes
export const searchAllReleasesCheckbox = document.getElementById("searchAllReleases");
export const searchAllCountriesCheckbox = document.getElementById("searchAllCountries");
export const searchCountriesCheckbox = document.getElementById("searchCountriesCheckbox");
export const releaseTypesContent = document.getElementById("releaseTypesContent");
export const countryPicker = document.getElementById("countryPicker");
export const languagePicker = document.getElementById("languagePicker");

// Date inputs
export const dateFromInput = document.getElementById("dateFrom");
export const dateToInput = document.getElementById("dateTo");
export const dateFromButton = document.getElementById("dateFromButton");
export const dateToButton = document.getElementById("dateToButton");

// Genre pills
export const genrePills = document.querySelectorAll(".genre-pill");

// Range sliders
export const userScoreMin = document.getElementById("userScoreMin");
export const userScoreMax = document.getElementById("userScoreMax");
export const userScoreRange = document.getElementById("userScoreRange");
export const votes = document.getElementById("votes");
export const votesRange = document.getElementById("votesRange");
export const runtimeMin = document.getElementById("runtimeMin");
export const runtimeMax = document.getElementById("runtimeMax");
export const runtimeRange = document.getElementById("runtimeRange");

// Keywords
export const keywordsWrapper = document.getElementById("keywordsWrapper");
export const keywordsInput = document.getElementById("keywordsInput");
export const keywordsDropdown = document.getElementById("keywordsDropdown");

// Buttons
export const searchButton = document.getElementById("searchButton");
export const loadMoreButton = document.getElementById("loadMoreButton");
export const mainButton = document.getElementById("mainBtn");

// Movies container
export const moviesContainer = document.getElementById("moviesContainer");
