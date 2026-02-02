import { COUNTRIES, LANGUAGES } from "./constants.js";
import {
  initializeSortUI,
  initializeFiltersToggle,
  initializePicker,
  setupPickerCloseBehavior,
  initializeDatePickers,
  initializeGenrePills,
  initializeRangeSliders,
  initializeSearchButtonObserver,
  initializeKeywords,
} from "./ui.js";
import { countryPicker, languagePicker } from "./dom.js";
import { initializeSearchHandlers, filters } from "./filters.js";
import { discoverMovies } from "./api.js";
import { renderMovies } from "./render.js";

// Initialize Application

function initializeApp() {
  // Initialize UI components
  initializeSortUI();
  initializeFiltersToggle();
  initializeSearchButtonObserver();

  // Initialize pickers
  initializePicker(countryPicker, COUNTRIES);
  initializePicker(languagePicker, LANGUAGES);
  setupPickerCloseBehavior();

  // Initialize date pickers
  initializeDatePickers();

  // Initialize other UI components
  initializeGenrePills();
  initializeRangeSliders();
  initializeKeywords();

  // Initialize search functionality
  initializeSearchHandlers();

  // Initial load
  discoverMovies(filters)
    .then((data) => {
      console.log(data.results);
      renderMovies(data.results);
    })
    .catch(console.error);
}

initializeApp();
