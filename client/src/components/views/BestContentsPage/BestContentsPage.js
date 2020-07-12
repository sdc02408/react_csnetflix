import React, { useEffect, useState } from 'react'
import MainImage from '../LandingPage/Sections/MainImage'
import { API_KEY, IMAGE_BASE_URL } from '../../Config'
import Netflix from '../../../container/Netflix'
import TrendContainer from '../../../container/TrendContainer'
import TopRated from '../../../container/TopRated'

import NewMovies from '../../../container/NewMovies'

function BestContents () {
  
  const [MainMovieImage, setMainMovieImage] = useState(null)
  
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&with_networks=213&language=ko&include_adult=false`
    fetchbestMovies(endpoint)
  }, [])
  
  const fetchbestMovies = (endpoint) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      setMainMovieImage(response.results[0])
      // setMiddleMovieImage(response.results[9])
      // console.log("main",response.results[1])
    })
  }
  console.log(MainMovieImage, 'mainmovie')
  
  return (
    <div style={{ width: '100%', margin: '0' }}>
      
      <div style={{ width: '95%', margin: '0 auto' }}>
        <p style={{
          position: 'absolute',
          zIndex: '4',
          top: '100px',
          color: 'white',
          fontSize: '2em',
          fontWeight: '600',
        }}>영화</p>
      </div>
      {MainMovieImage &&
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
        title={MainMovieImage.title}
        text={MainMovieImage.overview}
      />
      }
      
      
      <NewMovies/>
      
      <TrendContainer/>
      <TopRated/>
      <Netflix/>
    
    
    </div>
  )
}

export default BestContents
