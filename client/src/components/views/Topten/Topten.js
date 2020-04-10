import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'

import './Content.scss';


function Topten(movie,onClose) {
  
   const [NewMovies, setNewMovies] = useState([])
  
  useEffect(() => {

    const newmovie = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    fetchNewMovie(newmovie)

  }, [])
  
  const fetchNewMovie = (newmovie) => {
    fetch(newmovie)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setNewMovies([...NewMovies, ...response.results])

    })
  }
  
  return (
    <div style={{width:'95%', margin:'3vh auto'}}>
      <div className='slide-title'> 내가 찜한 콘텐츠</div>
     
        {NewMovies && NewMovies.map((NewMovies,index) => (
          <React.Fragment key={index}>
            <img src={`${IMAGE_BASE_URL}w300${NewMovies.poster_path}`} />
          </React.Fragment>
        ))}
        
        
      {/*{NewMovies &&*/}
      {/*  <MainText*/}
      {/*    title={NewMovies.original_title}*/}
      {/*    text={NewMovies.overview}*/}
      {/*    style={{marginTop:'1500px'}} />*/}
      {/*}*/}
      
   
    </div>
 )
}


export default withRouter(Topten)
