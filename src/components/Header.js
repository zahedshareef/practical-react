import React from 'react';
import MyForm from './MyForm';

export default class Header extends React.Component {
    state = {
        visible: true
    };

    render() {
        return (
            <div className="App">
                <MyForm />
            </div>
        );
    }
}
