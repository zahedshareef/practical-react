import React from 'react';
import Counter from './Counter';

export default class Header extends React.Component {
    state = {
        count: 1,
        initialCount: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    reset = () => {
        this.setState({
            count: this.state.initialCount
        });
    };

    render() {
        return (
            <div className="App">
                <Counter
                    count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                    reset={this.reset}
                />
                <Counter
                    count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                    reset={this.reset}
                />
            </div>
        );
    }
}
