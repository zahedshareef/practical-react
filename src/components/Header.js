import React from 'react';
import logo from '../logo.svg';
import Counter from './Counter';
import ImageSlider from './ImageSlider';
import MyForm from './MyForm';

export default class Header extends React.Component {
    state = {
        visible: true,
        componentToShow: 'ImageSlider'
    };

    render() {
        return <MyForm />;
    }
}
