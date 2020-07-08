import React, { useEffect, useState } from 'react'
import { fetchNewMovie } from '../_actions/user_action'
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../components/views/commons/Movie'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../static/sass/components/CsSlider.scss'

const NewMovies = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    dispatch(fetchNewMovie())
    
  }, [])
  
  const newMovieData = useSelector(state => state.newmovie.newMovie, []) || []
  console.log(newMovieData,"new")
  
  return (
    <div className="sliders" >
      <p style={{color:'#ffffff', fontSize:'1.7rem',position:'relative', top:'30px',fontWeight:"bold",marginBottom:'0'}}>상영중인 영화</p>
      <Slider {...settings} className="csslider" style={{display:'flex',alignItems:'center'}}>
        
        {newMovieData.results && newMovieData.results.map(movie => (
          movie.backdrop_path ?
          <Movie props={movie} key={movie.id}/> : null
        ))}
      
      </Slider>
    </div>
  )
}

export default NewMovies
