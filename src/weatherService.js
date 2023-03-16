const API_KEY = "42c9b19f09f19de08ffe29be341d7104";

const makeIconURL = (iconId) =>
  `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  // console.log(data);
  const {
    weather,
    main: { temp, feels_like, humidity, pressure, temp_min, temp_max },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    weather,
    temp,
    feels_like,
    humidity,
    pressure,
    temp_min,
    temp_max,
    speed,
    country,
    name,
    description,
    iconURL: makeIconURL(icon),
  };
};
export { getFormattedWeatherData };
