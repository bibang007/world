import React, { Component } from 'react';
import './App.css';
import Form from './Form'


class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      countries: [],
      currentCountries: [],
      name: '',
      flag: '',
      Region: '',
    }
    this.getCountriesByRegion = this.getCountriesByRegion.bind(this);
    this.getCountriesByName = this.getCountriesByName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  getCountriesByRegion(e){
    e.preventDefault()
    const region = this.state.countries.filter(country =>country.Region.toLowerCase() == this.state.value.toLowerCase())
    this.setState({
      currentCountries: region,
      value:''
    })
}


getCountriesByName(e){
  e.preventDefault()
  const country = this.state.countries.filter(country =>country.Name.toLowerCase() == this.state.name.toLowerCase())
  this.setState({
    currentCountries: country,
    name:''
  })
}

  allCountries(){
    fetch('https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries')
    .then(response => response.json())
    .then(data => {
      this.setState({
        countries: data.Response,
        
      })
    })
  }
 
componentDidMount(){
  this.allCountries()
}


  handleChange(e) {
    const {name, value}= e.target;
    this.setState({ 
      [name]: value 
    })
  }

  renderCountry() {
    if (this.state.currentCountries) {
      return this.state.currentCountries.map(country => {
        return (
          <div key={country.NumericCode} className="country">
            <h1>{country.Name}</h1>
            <img className="flag" src={country.Flag} />
            <h1>{country.NativeLanguage}</h1>
            <h1>{country.CurrencyName}</h1>
            <h1>{country.Region}</h1>
          </div>
        )
      })
    }
  }


  render() {
    console.log(this.state.countries)
    return (
      

      <div className="main">

        <Form 
        name={this.state.name}
        value={this.state.value}
        getCountriesByName={this.getCountriesByName}
        getCountriesByRegion={this.getCountriesByRegion}
        handleChange={this.handleChange}
        />

        {this.renderCountry()}


      </div>


    );
  }
}

export default Main;
