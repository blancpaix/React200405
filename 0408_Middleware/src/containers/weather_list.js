import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    
    renderWeather (data) {
        console.log('이거 뭐임?',data);
        const name = data.city.name;
        const temps = data.list.map(weather => weather.main.temp);
        const press = data.list.map(weather => weather.main.pressure);
        const humid = data.list.map(weather => weather.main.humidity);

        const { lon, lat } = data.city.coord;
        console.log(lon + '/' + lat);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{temps}</td>
                <td>{press}</td>
                <td>{humid}</td>
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