import React from "react"
import PropTypes from "prop-types"
import { countries } from "./constants"



function WeatherTable({ data }) {
    const styles = {
        weatherTable: data.cityName ? {
            backgroundImage: `url(${countries[data.cityName].background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
        } : '',
        weatherData: {
            background: 'rgba(0, 0, 0, .7)',
            color: 'rgb(210 174 73)',
            borderRadius: '5px'
        }
    }
    return (
        <div style={{ ...styles.weatherTable }} className="weather-table">
            {!data.cityName
                ? <h1>Press the button</h1>
                : <div className="weather-data" style={{ ...styles.weatherData }}>
                    <h1>{data.cityName}</h1>
                    <p><strong>{Math.floor(data.temp - 273)}&#176;C, {data.description}</strong></p>
                    <img src={`http://openweathermap.org/img/w/${data.img}.png`}></img>
                </div>}
        </div>
    )
}

WeatherTable.propTypes = {
    data: PropTypes.object.isRequired
}

export default WeatherTable