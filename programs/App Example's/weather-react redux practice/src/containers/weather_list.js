import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import _ from "lodash";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    const { lat, lon } = cityData.city.coord;

     console.log(cityData);

    return (
      
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color={"red"} units="°C" />
        </td>
        <td>
          <Chart data={pressures} color={"green"} units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color={"purple"} units="%" />
        </td>
      </tr>
      
    );
  }
  render() {
    console.log(name);
    return (
      
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(°C)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
