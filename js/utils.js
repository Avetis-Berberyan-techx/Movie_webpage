//Build URL query string from filter parameters
export function getFilterURL(filterParams) {
  let url = "";
  for (let [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value)) {
      url += `${key}=${value.map((v) => encodeURIComponent(v)).join("|")}&`;
    } else {
      url += `${key}=${encodeURIComponent(value)}&`;
    }
  }
  if (url.endsWith("&")) url = url.slice(0, -1);
  return url;
}

//Get color based on percentage (red -> yellow -> green)
export function getColorFromPercent(percent) {
  percent = Math.max(0, Math.min(100, percent));

  let r, g, b;

  if (percent < 50) {
    // red -> yellow
    r = 255;
    g = Math.round(255 * (percent / 50));
    b = 0;
  } else {
    // yellow -> green
    r = Math.round(255 * (1 - (percent - 50) / 50));
    g = 255;
    b = 0;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
