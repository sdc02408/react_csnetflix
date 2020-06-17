import React from 'react'
import {withRouter } from 'react-router-dom';


function SearchPage (props) {

  
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/original/${props.imageList}`} style={{width:'150px'}}/>
    </div>
  )
}

export default withRouter(SearchPage)
