import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    // Component 사용
    constructor(props) {
        super (props);

        this.state = {term : ''};
        // .bind 묶어주는건데 (this) 는 뭐임???.... 그냥 들어오는값이랑 동기화인가?            %%%%%%%%%%%
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault(); // 폼 전송 막기 => 후처리
        
        // We need to go and fetch weather data
        // component state를 Action 으로 넘김
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''});
    }

    onInputChange(event) {
        this.setState({term : event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Het 5day forcast from input value"
                    className="form-control"
                    value= {this.state.term} 
                    onChange={this.onInputChange}/>
                <span className="input-group-lst">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators( { fetchWeather }, dispatch)
}

export default connect (null, mapDispatchToProps) (SearchBar);
// null 이유 : 함수 전달 시 컨테이너에 전달하는 DispatchToProps 가 두번재 요소로 들어가야 해서?