import React from 'react';

export default class FetchData extends React.Component {
    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        await this.fetchPeople();
    }

    fetchPeople = async () => {
        const url = 'https://api.randomuser.me?results=6';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    };

    titleCase = (str) => {
        return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.people.length) {
            return <div>error...</div>;
        }

        const peopleJsx = this.state.people.map((person) => (
            <div key={person.login.uuid}>
                <img className="personImg" src={person.picture.large} alt={person.name.first} />
                <h3>Name: {this.titleCase(`${person.name.first} ${person.name.last}`)}</h3>
                <h4>Gender: {person.gender}</h4>
            </div>
        ));

        return (
            <div className="App">
                <ul className="people-list">
                    <li className="people-item">{peopleJsx}</li>
                </ul>
            </div>
        );
    }
}
