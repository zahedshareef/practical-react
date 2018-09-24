import React from 'react';

export default class Counter extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: props.initialCount
    //     };

    //     this.increment = this.increment.bind(this);
    // }

    componentWillUnmount = () => {
        console.log('unmounting...');
    };

    componentDidMount = () => {
        console.log('mounting...');
    };

    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // }
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
                <h3>Count: {this.props.count}</h3>
                <button onClick={this.props.decrement}>Decrement</button>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        );
    }
}
