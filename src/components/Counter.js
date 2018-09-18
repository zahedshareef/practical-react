import React from 'react';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.initialCount
		};

		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState({
			count: this.state.count + 1
		});
	}
	// increment = () => {
	// 	this.setState({
	// 		count: this.state.count + 1
	// 	});
	// };

	decrement = () => {
		this.setState({
			count: this.state.count - 1
		});
	};

	render() {
		return (
			<div>
				<h3>Count: {this.state.count}</h3>
				<button onClick={this.decrement}>Decrement</button>
				<button onClick={this.increment}>Increment</button>
				<button
					onClick={() => {
						this.setState({
							count: this.props.initialCount
						});
					}}
				>
					reset
				</button>
			</div>
		);
	}
}
