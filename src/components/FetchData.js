import React from 'react';

export default class FetchData extends React.Component {
    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }

    state = {
        loading: true,
        person: null
    };

    titleCase = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' ');
    };

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>error...</div>;
        }

        const name =
            this.titleCase(this.state.person.name.title) +
            ' ' +
            this.titleCase(this.state.person.name.first) +
            ' ' +
            this.titleCase(this.state.person.name.last);
        return (
            <div className="App">
                <img className="personImg" src={this.state.person.picture.large} alt={this.state.person.name.first} />
                <h3>Name: {name}</h3>
                <h4>Gender: {this.state.person.gender}</h4>
            </div>
        );
    }
}
