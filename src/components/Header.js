import React from 'react';
import logo from '../logo.svg';
import Counter from './Counter';
import ImageSlider from './ImageSlider';

export default class Header extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Counter initialCount={1} />
				<ImageSlider />
			</div>
		);
	}
}
