import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>

        <form className='form' onSubmit={e => this.getCountriesByRegion(e)}>
          <input type='text' placeholder="Search by Region" name='value' value={this.state.value} onChange={e => this.handleChange(e)}></input>
          

        </form>

        <form className='form' onSubmit={e => this.getCountriesByName(e)}>
          <input type='text' placeholder="Search by Name" name='name' value={this.state.name} onChange={e => this.handleChange(e)}></input>
          

        </form>
        
      </div>
    )
  }
}
