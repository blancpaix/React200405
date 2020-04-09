// App state 는 리듀서에 의해 생성 / 변경
import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

// 리듀서는 combineReducers 메소드에 의해 연결, 오브젝트의 각 키는 하나의 리듀서 할당
const rootReducer = combineReducers ({
  // 스테이트 변화는 액션이 디스패치되며 다른 디듀서로 가서 이뤄짐. (리듀서는 다른 스테이트를 반환)
    // state : (state = {}) => state
  weather : WeatherReducer
});

export default rootReducer;

// Ajax 리퀘스트를 만드는 등의 일은 리덕스가 함.