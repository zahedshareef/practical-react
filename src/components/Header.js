import React from 'react';
import FetchData from './FetchData';

export default class Header extends React.Component {
    state = {
        visible: true
    };

    render() {
        return (
            <div className="App">
                <FetchData />
            </div>
        );
    }
}
