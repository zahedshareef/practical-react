import React from 'react';
import logo from '../logo.svg';
import Counter from './Counter';
import ImageSlider from './ImageSlider';

export default class Header extends React.Component {
	state = {
		visible: true,
		componentToShow: 'ImageSlider'
	};

	render() {
		if (this.state.componentToShow === 'ImageSlider') {
			return (
				<div className="App">
					<ImageSlider />
				</div>
			);
		} else if (this.state.componentToShow === 'Counter') {
			return (
				<div className="App">
					<Counter initialCount={1} />
				</div>
			);
		}

		return null;
	}
}
