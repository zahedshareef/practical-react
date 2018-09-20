import React from 'react';
import Counter from './Counter';

export default class Header extends React.Component {
    state = {
        visible: true
    };

    render() {
        return (
            <div className="App">
                <div className={this.state.visible ? 'visible' : 'hidden'}>
                    <Counter initialCount={1} />
                </div>
                <button
                    onClick={() => {
                        this.setState({
                            visible: !this.state.visible
                        });
                    }}>
                    toggle counter
                </button>
            </div>
        );
    }
}
