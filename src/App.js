import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Form from './Form'
import Footer from './Footer'
import Welcome from './Welcome'
import Main from './Main'
// import Header from './Header'

class App extends Component {


// function to render the page with diff background


  render() {

    return (


  <main>

      <div className="App">

      <Route exact path="/" render={() => <Welcome />} />


      <Route exact path="/Main" render={() => <Main />} />

      <Footer />

      

    



      </div>
  </main>

    );
  }
}

export default App;
