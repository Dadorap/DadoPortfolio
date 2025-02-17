const weatherDiv = document.querySelector(".weather");
const imgDiv = document.querySelector(".weather-img");
const infoDiv = document.querySelector(".weather-info");

async function getWeather() {
  const apiUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=62.6323&longitude=17.9370&hourly=temperature_2m,cloudcover,precipitation_probability&timezone=Europe/Stockholm";

  try {
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather for Härnösand:", error);
  }
}

async function displayWeather() {
  const data = await getWeather();

  const currentTemperature = data.hourly.temperature_2m[0];
  const currentCloudCover = data.hourly.cloudcover[0];
  const rain = data.hourly.precipitation_probability[0];

  const weatherConditions = [
    { name: "Sunny", condition: currentCloudCover < 20 && rain < 10 },
    {
      name: "Cloudy",
      condition: currentCloudCover >= 20 && currentCloudCover < 60 && rain < 10,
    },
    { name: "Cloud", condition: currentCloudCover >= 60 && rain < 10 },
    { name: "Light Rain", condition: rain >= 10 && rain < 30 },
    { name: "Rainy", condition: rain >= 30 && rain < 60 },
    { name: "Heavy Rain", condition: rain >= 60 },
  ];

  const currentWeather = weatherConditions.find((weather) => weather.condition);

  switch (currentWeather.name) {
    case "Sunny":
      imgDiv.innerHTML = '<img src="/images/weatherImages/sunny.png" alt="" />';
      break;
    case "Cloudy":
      imgDiv.innerHTML =
        '<img src="/images/weatherImages/cloudy.png" alt="" />';
      break;
    case "Cloud":
      imgDiv.innerHTML = '<img src="/images/weatherImages/cloud.png" alt="" />';
      break;
    case "Light Rain":
      imgDiv.innerHTML = '<img src="/images/weatherImages/rainy.png" alt="" />';
      break;
    case "Rainy":
      imgDiv.innerHTML = '<img src="/images/weatherImages/rainy.png" alt="" />';
      break;
    case "Heavy Rain":
      imgDiv.innerHTML = '<img src="/images/weatherImages/rain.png" alt="" />';
      break;
    default:
      break;
  }

  infoDiv.innerHTML = `
  Current temperature in Härnösand: ${currentTemperature}°C<br>
  Cloud cover: ${currentCloudCover}% &nbsp;
  Rain probability: ${rain}%
`;

  console.log(`Current temperature in Härnösand: °C`);
}

displayWeather();
