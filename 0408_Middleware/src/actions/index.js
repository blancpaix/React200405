import axios from 'axios';

const API_KEY = '227e76cd1909b375327c6e4c2cfeaed7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// 리듀서와 액션 생성자 사이 액션 타입을 일정하게 유지
// 하나의 변수로 액션 타입을 만어 사용 / 다른 리듀서에서 불러와서 사용

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type : 'FETCH_WEATHER',
        payload : request
    }
}