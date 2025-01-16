import React from 'react'
import Couroselpage from '../components/Couroselpage'
import Content from '../components/Content'
import Twocard from '../components/Twocard'
import Scrollcards from '../components/Scrollcards'
import Header from '../components/Header'
import Filters from '../components/Filters'
import Longimg from '../components/Longimg'
import Topmovies from '../components/Topmovies'



function Homepage() {
  return (
    <>
      <div className='crclmains'>
        <Couroselpage />
      </div>

      <div className="contentMain py-3">
        <Content />
      </div>

      <div className="TwocardMain ">
        <Twocard/>
      </div>
      
      <div className="movietpo5">
        <Topmovies/>
      </div>
      <div className="headerpagelongimg ">
        <Longimg/>
      </div>

      <div className="scrollMain">
        <Scrollcards/>
      </div>


    </>
  )

}

export default Homepage
