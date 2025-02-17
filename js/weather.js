const weatherDiv = document.querySelector(".weather");
const imgDiv = document.querySelector(".weather-img");
const infoDiv = document.querySelector(".weather-info");

async function getWeather() {
  const apiUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=62.6323&longitude=17.9370&hourly=temperature_2m,precipitation_probability,cloudcover,snowfall&daily=sunset&timezone=Europe/Stockholm";

  try {
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather for Härnösand:", error);
  }
}

function getCurrentTimeFormatted() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");

  return `${year}-${month}-${day}T${hour}:00`;
}

async function displayWeather() {
  const data = await getWeather();
  const timeIndex = data.hourly.time.findIndex(
    (time) => time == getCurrentTimeFormatted()
  );

  const sunsetTime = data.daily.sunset[0];
  const currentTemperature = data.hourly.temperature_2m[timeIndex];
  const currentCloudCover = data.hourly.cloudcover[timeIndex];
  const rain = data.hourly.precipitation_probability[timeIndex];
  const currentSnowfall = data.hourly.snowfall[timeIndex];

  console.log(sunsetTime < getCurrentTimeFormatted());

  const weatherConditions = [
    { name: "Clear", condition: currentCloudCover < 20 && rain < 10 },
    {
      name: "Cloudy",
      condition: currentCloudCover >= 20 && currentCloudCover < 60 && rain < 10,
    },
    { name: "Cloud", condition: currentCloudCover >= 60 && rain < 10 },
    { name: "Light Rain", condition: rain >= 10 && rain < 30 },
    { name: "Rainy", condition: rain >= 30 && rain < 60 },
    { name: "Heavy Rain", condition: rain >= 60 },
    {
      name: "Snowing",
      condition: currentSnowfall >= 5 && currentTemperature <= 2,
    },
  ];

  const currentWeather = weatherConditions.find((weather) => weather.condition);

  if (sunsetTime > getCurrentTimeFormatted()) {
    switch (currentWeather.name) {
      case "Clear":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/sunny.png" alt="" />';
        break;
      case "Cloudy":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/cloudy.png" alt="" />';
        break;
      case "Cloud":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/cloud.png" alt="" />';
        break;
      case "Light Rain":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/rainy.png" alt="" />';
        break;
      case "Rainy":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/rainy.png" alt="" />';
        break;
      case "Heavy Rain":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/rain.png" alt="" />';
        break;
      case "Snowing":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/snow.png" alt="" />';
        break;
      default:
        break;
    }
  } else {
    switch (currentWeather.name) {
      case "Clear":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/night.png" alt="" />';
        break;
      case "Cloudy":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/cloudy-night.png" alt="" />';
        break;
      case "Cloud":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/cloud.png" alt="" />';
        break;
      case "Light Rain":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/rainy-night.png" alt="" />';
        break;
      case "Rainy":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/rainy-night.png" alt="" />';
        break;
      case "Heavy Rain":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/rain.png" alt="" />';
        break;
      case "Snowing":
        imgDiv.innerHTML =
          '<img src="/images/weatherImages/snowy-night.png" alt="" />';
        break;
      default:
        break;
    }
  }

  infoDiv.innerHTML = `
  Current temperature in Härnösand: ${currentTemperature}°C<br>
  Cloud cover: ${currentCloudCover}% &nbsp;
  Rain probability: ${rain}%
`;
}

displayWeather();


