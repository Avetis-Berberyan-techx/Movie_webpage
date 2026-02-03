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
  initializePicker(countryPicker, COUNTRIES);
  initializePicker(languagePicker, LANGUAGES);
  setupPickerCloseBehavior();
  initializeDatePickers();
  initializeGenrePills();
  initializeRangeSliders();
  initializeKeywords();
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
