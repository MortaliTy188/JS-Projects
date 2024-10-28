const weatherDescription = document.querySelector(".weather-description");
const resultWrap = document.querySelector(".result-wrap");
const cityInput = document.querySelector(".city-input");

document.getElementById("button").addEventListener("click", () => {
  const APIKey = "YOUR API";

  const city = cityInput.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      weatherDescription.style.display = "block";
      resultWrap.style.display = "block";
      const temperature = document.getElementById("temperature");
      temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;

      const wind = document.getElementById("wind");
      wind.innerHTML = `${parseInt(data.wind.speed)}<span>Км/ч</span>`;

      const humidity = document.getElementById("humidity");
      humidity.innerHTML = `${parseInt(data.main.humidity)}<span>%</span>`;

      const clouds = document.getElementById("clouds");
      clouds.innerHTML = `${parseInt(data.clouds.all)}<span>%</span>`;

      const description = document.getElementById("description");
      description.innerHTML = `${data.weather[0].description}`;

      const search = document.querySelector(".search");
      search.style.marginBottom = "50px";

    })
    .catch(err => console.err(err));
});
