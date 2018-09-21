import React from 'react';

export default class MyForm extends React.Component {
    state = {
        name: 'zahed',
        rememberMe: false,
        title: 'Master'
    };

    handleChange = (event, fieldname, isCheckbox) => {
        console.log(isCheckbox ? event.target.checked : event.target.value);
        this.setState({
            [fieldname]: isCheckbox ? event.target.checked : event.target.value
        });
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div className="App">
                <div>
                    <select value={this.state.title} onChange={(event) => this.handleChange(event, 'title')}>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                        <option>Master</option>
                    </select>
                    <input value={this.state.name} onChange={(event) => this.handleChange(event, 'name')} />
                </div>
                Remember:{' '}
                <input
                    type="checkbox"
                    value={this.state.rememberMe}
                    onChange={(event) => this.handleChange(event, 'checkbox', true)}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
