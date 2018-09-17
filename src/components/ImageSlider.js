import React from 'react';

export default class ImageSlider extends React.Component {
	state = {
		images: [
			'https://placeimg.com/320/240/nature',
			'https://placeimg.com/320/240/arch',
			'https://placeimg.com/320/240/people',
			'https://placeimg.com/320/240/tech',
			'https://placeimg.com/320/240/animals'
		],
		idx: 0
	};

	handleNext = () => {
		console.log(this.state);
		this.setState({ idx: this.state.idx + 1 }, () => {
			console.log(this.state);
		});
	};

	handlePrevious = () => {
		this.setState({
			idx: this.state.idx - 1
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.handlePrevious}>previous</button>
				<img src={this.state.images[this.state.idx]} alt="images" />
				<button onClick={this.handleNext}>next</button>
			</div>
		);
	}
}
