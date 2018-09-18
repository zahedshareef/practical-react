import React from 'react';
import logo from '../logo.svg';
import Counter from './Counter';
import ImageSlider from './ImageSlider';

export default class Header extends React.Component {
	state = {
		visible: true
	};

	render() {
		// if (!this.state.visible) {
		// 	return <div>display nothing</div>;
		// 	//content after this if-condition this will not render when visible is false.
		// }

		const buttonText = this.state.visible ? 'hide' : 'show';
		const slider = this.state.visible ? <ImageSlider /> : <Counter initialCount={1} />;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Practical React</h1>
				</header>
				{slider}
				<button
					onClick={() => {
						this.setState({
							visible: !this.state.visible
						});
					}}
				>
					{buttonText}
				</button>
			</div>
		);
	}
}
