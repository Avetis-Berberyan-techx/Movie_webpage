import {
  sortToggle,
  sortBody,
  sortSelect,
  sortSelectButton,
  sortSelectValue,
  sortDropdown,
  sortOptions,
  filtersToggle,
  filtersBody,
  searchAllCheckbox,
  availabilitiesContent,
  searchAllReleasesCheckbox,
  searchAllCountriesCheckbox,
  searchCountriesCheckbox,
  releaseTypesContent,
  countryPicker,
  languagePicker,
  genrePills,
  userScoreMin,
  userScoreMax,
  userScoreRange,
  votes,
  votesRange,
  runtimeMin,
  runtimeMax,
  runtimeRange,
  dateFromInput,
  dateToInput,
  dateFromButton,
  dateToButton,
  searchButton,
  mainButton,
  keywordsWrapper,
  keywordsInput,
  keywordsDropdown,
} from "./dom.js";
import { KEYWORDS } from "./constants.js";

// Sort Functionality

export function initializeSortUI() {
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
}

// Filters Toggle

export function initializeFiltersToggle() {
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
}

// Picker Functionality

export function initializePicker(pickerElement, items) {
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
export function setupPickerCloseBehavior() {
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".picker").forEach((picker) => {
      if (!picker.contains(e.target)) {
        picker.classList.remove("picker--open");
      }
    });
  });
}

// Date Picker Functionality

export function initializeDatePickers() {
  const toPicker = new AirDatepicker(dateToInput, {
    language: "en",
    dateFormat: "yyyy-MM-dd",
    onSelect: () => {
      toPicker.hide();
    },
  });

  const fromPicker = new AirDatepicker(dateFromInput, {
    language: "en",
    dateFormat: "yyyy-MM-dd",
    onSelect: ({ date }) => {
      toPicker.update({ minDate: date });
      fromPicker.hide();
    },
  });

  dateFromButton.addEventListener("click", () => fromPicker.show());
  dateToButton.addEventListener("click", () => toPicker.show());
}

// Genre Pills Functionality

export function initializeGenrePills() {
  genrePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pill.classList.toggle("genre-pill--active");
    });
  });
}

// Range Sliders Functionality

export function initializeRangeSliders() {
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
}

// Keywords Functionality

export const selectedKeywords = new Set();
const availableKeywords = Object.keys(KEYWORDS);

export function renderKeywordPills() {
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

export function initializeKeywords() {
  keywordsWrapper.addEventListener("click", () => {
    keywordsInput.focus();
  });

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
}

// Search Button Observer

export function initializeSearchButtonObserver() {
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

  // Making available search buttons
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
}
