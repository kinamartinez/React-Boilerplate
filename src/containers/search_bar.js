/**
 * Created by karina on 09/04/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        //we need to go and fetch the weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five day forecast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        );
    }
}

function  mapDispachToProps(dispatch) {
    return bindActionCreators ({fetchWeather}, dispatch);
}

export default connect(null, mapDispachToProps)(SearchBar)
//poniendo null como argument cuando pasamos la funcion, lo que le decimos a react
//es que no necesitamos un state aqui