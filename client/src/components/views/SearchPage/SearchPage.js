import React from 'react'
import {withRouter } from 'react-router-dom';


function SearchPage (props) {

  
  return (
    <div style={{margin:'10px 10px'}}>
      <img src={props.imageList} style={{width:'150px'}}/>
    </div>
  )
}

export default withRouter(SearchPage)
