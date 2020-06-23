import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        const response = await axios.get('http://api.weatherstack.com/current?access_key=1a93a72ba85c81df32e8ba53280900e1&query=' + this.props.location.state.Image, {
        })
        console.log(response);
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
export default Weather;