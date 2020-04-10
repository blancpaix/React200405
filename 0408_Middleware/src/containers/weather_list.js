import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
// import GoogleMap from '../components/google_map';


class WeatherList extends Component {
    
    renderWeather (data) {
        const name = data.city.name;
        const temps = data.list.map(weather => weather.main.temp);
        const press = data.list.map(weather => weather.main.pressure);
        const humid = data.list.map(weather => weather.main.humidity);
        const { lon, lat } = data.city.coord;

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" unit="K" /></td>
                <td><Chart data={press} color="red" unit="hPa" /></td>
                <td><Chart data={humid} color="blue" unit="%" /></td>
            </tr>
        )
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temps</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// 기존 expot default class 에서 오류 떴는데...?? 초기화 시 값이 없어서 this.props.weather is undefined...?? 이거 쓰니까 없어짐?
function mapStateToProps ( {weather}) {
    return { weather };
}

export default connect (mapStateToProps) (WeatherList);