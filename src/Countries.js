import React, { Component } from 'react'

export default class Countries extends Component {
    constructor(props){
        super(props)
        this.state={
          countries: null
        }

    //    this.getCountries = this.getCountries.bind(this)

    }

    // componentDidMount(){
    //     this.getCountries()
    // }

    // getCountries() {
    //     fetch( 'https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries' )
    //       .then( response => response.json() )
    //       .then( data => {
    //         this.setState( { countries: data.reponse})
    //       } )
     
    //   }

renderCountries() {

}



  render() {
    console.log( this.props)

    return (
      <div>
        {this.renderCountries()}
      </div>
    )
  }
}
