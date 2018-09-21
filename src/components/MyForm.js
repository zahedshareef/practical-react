import React from 'react';

export default class MyForm extends React.Component {
    state = {
        name: 'zahed',
        rememberMe: false,
        title: 'Master',
        description: 'Describe yourself'
    };

    handleChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox';
        console.log(isCheckbox ? event.target.checked : event.target.value);
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <select name="title" value={this.state.title} onChange={this.handleChange}>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                        <option>Master</option>
                    </select>
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </div>
                Remember:{' '}
                <input name="rememberMe" type="checkbox" value={this.state.rememberMe} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
