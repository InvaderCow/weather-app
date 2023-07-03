function city(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#searchInput");
  let enterCity = cityInput.value;

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${enterCity}`;
}
let search = document.querySelector("#searchBar");
search.addEventListener("click", city);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
