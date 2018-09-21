import React from 'react';
import ValidationForm from './ValidationForm';

export default class Header extends React.Component {
    state = {
        visible: true
    };

    render() {
        return (
            <div className="App">
                <ValidationForm />
            </div>
        );
    }
}
