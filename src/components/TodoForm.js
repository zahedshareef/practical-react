import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
    state = {
        text: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //submit todo
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input name="text" value={this.state.text} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>add todo</button>
                </div>
            </form>
        );
    }
}
