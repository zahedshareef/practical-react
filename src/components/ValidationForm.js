import React from 'react';
let initialState = {
    username: '',
    email: '',
    password: '',
    usernameError: '',
    emailError: '',
    passwordError: ''
};

export default class ValidationForm extends React.Component {
    state = initialState;

    handleChange = (e) => {
        const isCheckbox = e.target.type === 'checkbox';
        this.setState({
            [e.target.name]: isCheckbox ? e.target.checked : e.target.value
        });
    };

    validate = () => {
        let usernameError = '';
        let emailError = '';
        let passwordError = '';

        if (this.state.username.length < 1) {
            usernameError = 'invalid username';
        }
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }
        if (this.state.password.length < 6) {
            passwordError = 'invalid password';
        }

        if (usernameError || emailError || passwordError) {
            this.setState({ usernameError, emailError, passwordError });
            return false;
        }

        return true;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <div
                        style={{
                            color: 'red',
                            fontsize: 12
                        }}>
                        {this.state.usernameError}
                    </div>
                </div>
                <div>
                    <input name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <div
                        style={{
                            color: 'red',
                            fontsize: 12
                        }}>
                        {this.state.emailError}
                    </div>
                </div>
                <div>
                    <input
                        name="password"
                        placeholder="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div
                        style={{
                            color: 'red',
                            fontsize: 12
                        }}>
                        {this.state.passwordError}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
