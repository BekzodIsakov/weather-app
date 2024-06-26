const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dialog = document.getElementById("search-dialog");
const dialogOpenButton = document.querySelector(".location-btn");
const dialogCloseButton = document.getElementById("dialog-close");
const searchInput = document.getElementById("search-input");

const searchResultContainer = document.getElementById("search-result");
const locationNameElement = document.getElementById("location-name");
const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");

const weatherTemp = document.querySelector(".weather-temp span");
const weatherMain = document.querySelector(".weather-main");
const precipitation = document.querySelector(".precipitation");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const spinner = document.createElement("div");
searchInput.parentElement.append(spinner);
spinner.className = "spinner";

(async function () {
  const date = new Date();
  renderDate(date);

  const currentLocation = await getCurrentLocation();
  console.log(currentLocation);
  renderLocation(`${currentLocation.city}, ${currentLocation.countryCode}`);

  const forecast = await fetchForecast(
    currentLocation.latitude,
    currentLocation.longitude
  );
  renderForecast(forecast);
})();

function renderLocation(location) {
  locationNameElement.textContent = location;
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to fetch current location data");
          }
          const data = await response.json();
          resolve(data);
        } catch (error) {
          reject(error);
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
}

function showSpinner() {
  spinner.style.display = "inline-block";
}

function hideSpinner() {
  spinner.style.display = "none";
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };

  // let timeoutId;
  // clearTimeout(timeoutId);
  // timeoutId = setTimeout(() => {console.log('timeout'), func()}, delay);
}

const handleSearchDebounce = debounce(handleSeachInput, 600);

searchInput.addEventListener("input", (event) => {
  const locationName = event.target.value.trim();

  if (locationName.length > 1) {
    // debounce(() => handleSeachInput(locationName), 600);
    handleSearchDebounce(locationName, 600);
  } else {
    searchResultContainer.innerHTML = "";
  }
});

async function handleSeachInput(locationName) {
  showSpinner();
  try {
    const resultLocations = await searchLocationByName(locationName);
    renderLocations(resultLocations);
  } catch (error) {
    console.error("Error fetching location data: ", error);
  } finally {
    hideSpinner();
  }
}

async function searchLocationByName(city) {

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${
    import.meta.env.VITE_OPENWEATHERMAP_API_KEY
  }`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch location data");
  }

  return response.json();
}

function renderLocations(locations) {
  searchResultContainer.innerHTML = ""; // clear previous search result

  locations.forEach((location, index) => {
    const listItem = document.createElement("li");
    listItem.dataset.index = index;
    listItem.textContent = `${location.name}, ${location.country}`;
    listItem.addEventListener("click", () => handleLocationClick(location));

    searchResultContainer.append(listItem);
  });
}

async function handleLocationClick(location) {
  const { lat, lon } = location;

  try {
    const forecast = await fetchForecast(lat, lon);
    renderForecast(forecast);

    const offset = forecast.timezone / 3600;
    const date = getDateForTimezone(offset);
    renderDate(date);

    renderLocation(`${location.name}, ${location.country}`);

    dialog.close();
  } catch (error) {
    searchResultContainer.textContent = "Something went wrong!";
    searchResultContainer.style.color = "red";
    console.error("Error fetching forecast data:", error);
  }
}

async function fetchForecast(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
    import.meta.env.VITE_OPENWEATHERMAP_API_KEY
  }&units=metric`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch forecast data");
  }

  return response.json();
}

function getDateForTimezone(offset) {
  if (typeof offset !== "number" || offset < -12 || offset > 14) {
    throw new Error(
      "Invalid timezone offset. It must be a number between -12 and 14."
    );
  }

  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utcTime + 3600000 * offset);
}

function renderDate(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date object.");
  }

  const today = days[date.getDay()];
  const monthDate = date.getDate();
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();

  if (!dayElement || !dateElement) {
    throw new Error("DOM elements not found.");
  }

  dayElement.textContent = today;
  dateElement.textContent = `${monthDate} ${monthName} ${year}`;
}

function renderForecast(forecast) {
  console.log(forecast);
  try {
    weatherTemp.textContent = Math.round(forecast.main.temp);
    weatherMain.textContent = forecast.weather[0].main;
    // precipitation.textContent = forecast.main.humidity;
    humidity.textContent = Math.round(forecast.main.humidity);
    wind.textContent = Math.round(forecast.wind.speed);
  } catch (error) {
    console.error(error);
  }
}

dialogOpenButton.addEventListener("click", () => dialog.showModal());
dialogCloseButton.addEventListener("click", () => dialog.close());
