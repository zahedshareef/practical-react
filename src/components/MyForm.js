import React from 'react';

export default class MyForm extends React.Component {
    state = {
        name: ''
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return (
            <div>
                Name:
                <input value={this.state.name} onChange={this.handleChange} />
                <p>Hi, {this.state.name}</p>
            </div>
        );
    }
}
