import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list';

const API_KEY = 'whatthe??';

/*
// Basic
const App = () => {	return (<div>asdf</div>); }
ReactDOM.render(<App/>, document.querySelector('.container'));

// Create a new component. This component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM)
*/

class App extends Component {
	// Global state
	constructor (props) {
		super (props);

		this.state = {
			videos : [],
			selectedVideo : null
		};
		this.videoSearch('surfboards');
	}

	
	videoSearch(input) {
		YTSearch ({ key: API_KEY, input}, (videos) => 
			{this.setState({
				videos,
				selectedVideo : videos[0]
			})
			console.log(this.state.videos);
		})
	}

	render() {
		const _inputSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
		
		return (
			<div>
				<h1>Gyuntube</h1>
				<SearchBar
					onSearchChange={ _inputSearch } />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));
