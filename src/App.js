import React, { useState } from "react";
import RequestButtons from "./RequestButtons"
import WeatherTable from "./WeatherTable";
import Loader from "./Loader";


function App() {
  document.title = 'Weather API'
  const [dataWeather, setDataWeather] = useState({})
  const [loading, setLoading] = React.useState(false)

  function addWeather(city) {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=301589d8f3d7927b19c4d4f58693e5e8`)
      .then(data => data.json())
      .then(info => {
        setDataWeather({
          cityName: info.name,
          temp: info.main.temp,
          description: info.weather[0].description,
          img: info.weather[0].icon
        })
        setLoading(false)
      })
  }

  return (
    <div className="wraper">
      <RequestButtons buttonHandler={addWeather} />
      {loading ? <Loader /> : <WeatherTable data={dataWeather} />}

    </div>
  );
}

export default App;
