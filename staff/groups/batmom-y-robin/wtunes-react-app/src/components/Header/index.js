import React, {Component} from 'react'
import logic from '../../logic'
import './index.sass'



class Header extends Component {
    state = {currentWeather: null, error: null, currentCity: this.props.city}
    hadleCityChange = e => {
        this.setState({currentCity: e})
        logic.retrieveWeather(e)
            .then(weather=> {
                this.props.onWeatherRetrieved(weather)
                this.setState({currentWeather: weather})
            })
    }


    componentDidMount() {
        this.setState({ currentCity: this.props.city }, () =>
            logic.retrieveWeather(this.state.currentCity)
                .then(weather=> {
                    this.props.onWeatherRetrieved(weather)
                    this.setState({currentWeather: weather})
                })
        )
    }
    render(){
        const {
            hadleCityChange,
            state: {currentWeather, currentCity, error}
        } = this
        return <div className="myHeader">
        <div className="container">
        <select name="city" onChange={event => hadleCityChange(event.target.value)} defaultValue={currentCity}>
            <option value="Alaska">Alaska</option>
            <option value="Auckland">Auckland</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Cape Town">Cape Town</option>
            <option value="Cuba">Cuba</option>
            <option value="Helsinki">Helsinki</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="Toronto">Toronto</option>
            <option value="Warsaw">Warsaw</option>
        </select>
        <h2>{currentCity}</h2>
        <h2>{currentWeather}</h2>
        <img src=""/>
        </div>
        </div>
    }
}

export default Header