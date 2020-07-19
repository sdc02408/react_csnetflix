import React, { useEffect, useState } from 'react'
import MainImage from '../LandingPage/Sections/MainImage'
import Netflix from '../../../container/Netflix'
import TrendContainer from '../../../container/TrendContainer'
import TopRated from '../../../container/TopRated'
import NewMovies from '../../../container/NewMovies'
import dotenv from 'dotenv'

dotenv.config()
const apikey = process.env.REACT_APP_API_KEYL

function BestContents () {
  
  const [MainMovieImage, setMainMovieImage] = useState(null)
  
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}&with_networks=213&language=ko&include_adult=false`
    fetchbestMovies(endpoint)
  }, [])
  
  const fetchbestMovies = (endpoint) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      setMainMovieImage(response.results[0])
    })
  }
  
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
        image={`https://image.tmdb.org/t/p/w1280${MainMovieImage.backdrop_path}`}
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
