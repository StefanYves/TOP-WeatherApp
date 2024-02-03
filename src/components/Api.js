import Weather from "./WeatherObj";
import { button, input, cards } from "./UI";

async function getWeather(name) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a5bbf82fedf3408e8b2122231240202&q=${name}&days=3&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const weatherToday = new Weather(
      weatherData.location.country,
      weatherData.location.name,
      weatherData.current.temp_c,
      weatherData.current.wind_kph,
      weatherData.forecast.forecastday[0].day.mintemp_c,
      weatherData.forecast.forecastday[0].day.maxtemp_c,
      weatherData.current.condition.icon
    );
    const weather2 = new Weather(
      weatherData.location.country,
      weatherData.location.name,
      weatherData.forecast.forecastday[1].day.avgtemp_c, // AVERAGE TEMP
      weatherData.forecast.forecastday[1].day.maxwind_kph, // MAX WIND
      weatherData.forecast.forecastday[1].day.mintemp_c,
      weatherData.forecast.forecastday[1].day.maxtemp_c,
      weatherData.forecast.forecastday[1].day.condition.icon
    );
    const weather3 = new Weather(
      weatherData.location.country,
      weatherData.location.name,
      weatherData.forecast.forecastday[2].day.avgtemp_c, // AVERAGE TEMP
      weatherData.forecast.forecastday[2].day.maxwind_kph, // MAX WIND
      weatherData.forecast.forecastday[2].day.mintemp_c,
      weatherData.forecast.forecastday[2].day.maxtemp_c,
      weatherData.forecast.forecastday[2].day.condition.icon
    );
    console.log(weatherToday);
    console.log(weather2);
    console.log(weather3);

    console.log(weatherData);

    weatherToday.createCardToday();
    weather2.createCardNextDays();
    weather3.createCardNextDays();
  } catch (err) {
    alert("Type a location ");
  }
}

getWeather("Bucharest");

button.addEventListener("click", () => {
  cards.innerHTML = ``;
  getWeather(input.value);
});
