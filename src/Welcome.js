import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends Component {
  render() {
    return (
      <div class='home'>
        <h2>HELLO</h2>

<p>
A country is a region that is identified as 
a distinct entity in political geography.
A country may be an independent sovereign state
 or part of a larger state,
as a non-sovereign or formerly sovereign political division, 
or a geographic region associated with sets 
of previously independent or differently associated 
people with distinct political characteristics.
 Regardless of the physical geography, in the 
 modern internationally accepted legal definition 
 as defined by the League of Nations in 1937 
 and reaffirmed by the United Nations in 1945, 
 a resident of a country is subject to the independent 
 exercise[clarification needed] of legal jurisdiction.
 There is no hard and fast definition of what regions 
 are countries and which are not.
</p>


<div class='wrapper'>
<Link to ='/Main'>Enter</Link>

</div>


      </div>
    )
  }
}
