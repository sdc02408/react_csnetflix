import React,{useState,useEffect} from 'react';
// import Layout from '../../../container/Layout'
import Netflix from '../../../container/Netflix'
import {API_KEY,API_URL,IMAGE_BASE_URL} from '../../Config'
import MainImage from './Sections/MainImage'
import TopRated from '../../../container/TopRated'
import TrendContainer from '../../../container/TrendContainer'

import MiddleSection from './Sections/MiddleSection'
import NewMovies from '../../../container/NewMovies'


function LandingPage (props) {
  
  const [MainMovieImage, setMainMovieImage] = useState(null)
  const [MiddleMovieImage, setMiddleMovieImage] = useState(null)
  
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko`
    fetchMovies(endpoint)
  }, [])

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      setMiddleMovieImage(response.results[1])
      setMainMovieImage(response.results[0])
      console.log("main",response.results[1])
    })
  }

  return (
      <div style={{width:'100%', margin:'0'}}>

        {MainMovieImage &&
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.name}
          text={MainMovieImage.overview}
        />
        }
      
      <Netflix />
      <TrendContainer />
      <TopRated />
      
        {MiddleMovieImage &&
        <MiddleSection
          image={`${IMAGE_BASE_URL}w1280${MiddleMovieImage.backdrop_path}`}
          titles={MiddleMovieImage.name}
          texts={MiddleMovieImage.overview}
        />
        }
  
        <TopRated />
        <NewMovies />
        
      </div>
  )
}

export default LandingPage
