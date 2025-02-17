const weatherDiv = document.querySelector(".weather");

async function getWeather() {
  const apiUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=62.6323&longitude=17.9370&hourly=temperature_2m,cloudcover,precipitation_probability&timezone=Europe/Stockholm";

  try {
    const resp = await fetch(apiUrl);
    const data = await resp.json();

    const currentTemperature = data.hourly.temperature_2m[0];
    const currentCloudCover = data.hourly.cloudcover[0];
    const rain = data.hourly.precipitation_probability[0];

    
    

    console.log(`Current temperature in Härnösand: ${rain}°C`);
  } catch (error) {
    console.error("Error fetching weather for Härnösand:", error);
  }
}

getWeather();
// cloudcover precipitation_probability time
