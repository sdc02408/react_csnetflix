import React,{useState,useEffect} from 'react';
import Netflix from '../../../container/Netflix'
import MainImage from './Sections/MainImage'
import TopRated from '../../../container/TopRated'
import TrendContainer from '../../../container/TrendContainer'
import dotenv from 'dotenv'
import MiddleSection from './Sections/MiddleSection'
import NewMovies from '../../../container/NewMovies'
dotenv.config()


function LandingPage (props) {
  const apikey = process.env.REACT_APP_API_KEYL
 
  const [MainMovieImage, setMainMovieImage] = useState(null)
  const [MiddleMovieImage, setMiddleMovieImage] = useState(null)
  
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_networks=213&language=ko`
    fetchMovies(endpoint)
  }, [])

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      setMainMovieImage(response.results[1])
      setMiddleMovieImage(response.results[9])
      // console.log("main",response.results[1])
    })
  }

  return (
      <div style={{width:'100%', margin:'0'}}>

        {MainMovieImage &&
        <MainImage
          image={`https://image.tmdb.org/t/p/w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.name}
          text={MainMovieImage.overview}
        />
        }
      
      <Netflix />
      <TrendContainer />
      <TopRated />
      
        {MiddleMovieImage &&
        <MiddleSection
          image={`https://image.tmdb.org/t/p/w1280${MiddleMovieImage.backdrop_path}`}
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
