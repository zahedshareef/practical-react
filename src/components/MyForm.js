import React from 'react';

export default class MyForm extends React.Component {
    state = {
        name: 'zahed',
        rememberMe: false,
        title: 'Master'
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleCheckbox = (event) => {
        this.setState({
            rememberMe: event.target.checked
        });
    };

    handleSelect = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div className="App">
                <div>
                    <select value={this.state.title} onChange={this.handleSelect}>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                        <option>Master</option>
                    </select>
                    <input value={this.state.name} onChange={this.handleChange} />
                </div>
                Remember: <input type="checkbox" value={this.state.rememberMe} onChange={this.handleCheckbox} />
                <button onClick={this.handleSubmit}>Submit</button>
                <div>
                    <p>
                        Welcome, {this.state.title}. {this.state.name}. Your preference to remember is set to:
                        {this.state.rememberMe ? 'yes' : 'no'}
                    </p>
                </div>
            </div>
        );
    }
}
