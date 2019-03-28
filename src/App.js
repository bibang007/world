import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Currency from './Currency'
import Region from './Region'
import NumericCode from './NumericCode'
import Flag from './Flag'
import Countries from './Countries'
import Input from './Input'
import Welcome from './Welcome'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      countries: [],
      currentCountries: [],
      name: '',
      flag: '',
      NumericCode: '',
      Region: '',
      Currency: ''
    }
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
      

      <div className="App">

        <form className='form' onSubmit={e => this.getCountriesByRegion(e)}>
          <input type='text' placeholder="Search by Region" name='value' value={this.state.value} onChange={e => this.handleChange(e)}></input>
          

        </form>

        <form className='form' onSubmit={e => this.getCountriesByName(e)}>
          <input type='text' placeholder="Search by Name" name='name' value={this.state.name} onChange={e => this.handleChange(e)}></input>
          

        </form>


        {/* <div><Link to='/Countries'>Countries</Link></div> */}


        <main>

          <Route path='/Countries' render={() => <Countries country={this.state.currentCountries} />} />
          <Route path='/Currency' render={() => <Currency Currency={this.state.Currency} />} />
          <Route path='/Region' render={() => <Region country={this.state.region} />} />
          <Route path='/NumericCode' render={() => <NumericCode country={this.state.NumericCode} />} />
          <Route path='/Flag' render={() => <Flag country={this.state.flag} />} />
          <Route path='/Input' render={() => <Input country={this.state.input} />} />

        </main>
        {this.renderCountry()}




        {/* {this.state.countries ? <div className='soren'>

          
          <div><Link to='/Region'>Region</Link></div>
          <div><Link to='/Currency'>Currency</Link></div>
          <div><Link to='/NumericCode'>NumericCode</Link></div>
          <div><Link to='/Flag'>Flag</Link></div>
          <div><Link to='/NativeLanguage'>NativeLanguage</Link></div>
          <div><Link to='/Input'>Input</Link></div></div>
          : null} */}

      </div>


    );
  }
}

export default App;
