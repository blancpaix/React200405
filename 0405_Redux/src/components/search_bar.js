import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super (props);
        
        this.state = {term : 'Input your Value'};   // SearchBar의 자체적인 state
    }

    // onInputChange(foo) { this.setState({term : foo}) } // Es6 적용
    onInputChange(term) {
        this.setState({term});
        // 컴포넌트 속성으로 사용될 함수
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={(event) => this.onInputChange(event.target.value)} />
                <br></br>
                Target value: {this.state.term}
            </div>
        )
    }

}

export default SearchBar;