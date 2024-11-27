function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".city");
  let city = `${searchInput.value}`;
  let apiKey = "3e38232bd20a4te3a6af822ocab6db24";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(getTemperature);
}

function getTemperature(response) {
  let weather = document.querySelector(".current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  weather.innerHTML = `${temperature}`;
  let location = document.querySelector("h1");
  location.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let windSpeed = document.querySelector("#speed");
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  let icon = document.querySelector(".weather-icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;
}

let form = document.querySelector("form");
form.addEventListener("submit", displayCity);

function formatDate() {
  let day = currentDay.getDay();
  let hours = currentDay.getHours();
  let minutes = currentDay.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDate = days[day];
  return `${formattedDate} ${hours}:${minutes}`;
}
let currentDetails = document.querySelector("#current-day");
let currentDay = new Date();
currentDetails.innerHTML = formatDate(currentDay);
