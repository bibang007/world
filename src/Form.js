import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>

        <form className='form' onSubmit={this.props.getCountriesByRegion}>
          <input type='text' placeholder="Search by Region" name='value' value={this.props.value} onChange={this.props.handleChange}></input>
          

        </form>

        <form className='form' onSubmit={this.props.getCountriesByName}>
          <input type='text' placeholder="Search by Name" name='name' value={this.props.name} onChange={this.props.handleChange}></input>
          

        </form>

      </div>
    )
  }
}
