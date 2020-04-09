import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_WEATHER' :
            // State 배열에 새로운 도시를 추가
            return [ action.payload.data, ...state];
            // return state.concat([action.payload.data])   새 배열을 만들어서 기존것과 새로운것 주입 (위랑 동일한 코드)
            // State 변조시 자주 사용 [1,2,3] O / [1, [2,3]] X            
    }

    return state; // 아니면 빈 배열 반환
}