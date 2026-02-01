# Movie Webpage

## File Structure

```
├── constants.js        # All constant definitions (API key, genres, countries, etc.)
├── dom.js             # DOM element references
├── utils.js           # Utility functions (URL building, color calculations)
├── api.js             # API communication (TMDB fetch functions)
├── render.js          # Rendering functions (movie cards display)
├── ui.js              # UI component initialization and event handlers (includes keywords)
├── filters.js         # Filter state management and search handlers
└── main.js            # Application entry point
```

## File Descriptions

### `constants.js`

- Language mappings
- Country codes
- Genre IDs
- Release types
- Keywords
- Sort options
- API key

### `dom.js`

- All DOM element references
- Organized by functionality (sort, filters, inputs, buttons, etc.)

### `utils.js`

- `getFilterURL()` - Builds URL query strings from filter parameters
- `getColorFromPercent()` - Calculates rating colors

### `api.js`

- `discoverMovies()` - Fetches movies from TMDB API

### `render.js`

- `renderMovies()` - Renders movie cards to the DOM

### `ui.js`

- Sort UI initialization
- Filters toggle
- Picker components (country, language)
- Date pickers
- Genre pills
- Range sliders
- Keywords selection functionality
- Search button observer

### `filters.js`

- Filter state management
- `buildFiltersFromUI()` - Collects all filter values from UI
- Search and load more handlers

### `main.js`

- Application initialization
- Coordinates all modules
- Initial data load

## Usage

In your HTML file, include the main script as a module:

```html
<script type="module" src="main.js"></script>
```

**Note:** Make sure your HTML file includes the AirDatepicker library before loading the main script, as it's used by the date picker functionality.
