import React, { useEffect, useState } from 'react'
import { fetchNetFlix } from '../_actions/user_action'
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../components/views/commons/Movie'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../static/sass/components/Netflix.scss'


const Netflix = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,

  }
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    dispatch(fetchNetFlix())
    
  }, [])
  
  const netflixData = useSelector(state => state.netflix.movies, []) || []
  
  return (
    <div className="sliders" style={{width:'95%',margin:'0 auto'}}>
      <p style={{}}>Netflix</p>
      <Slider {...settings} className="csslider">
        
        {netflixData.results && netflixData.results.map(movie => (
          
          <Movie props={movie} key={movie.id}/>
         
        ))}
      
      </Slider>
    </div>
  )
}

export default Netflix
