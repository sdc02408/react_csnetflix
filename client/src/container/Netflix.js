import React, { useEffect } from 'react'
import { fetchNetFlix } from '../_actions/user_action'
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../components/views/commons/Movie'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../static/sass/components/CsSlider.scss'

const Netflix = (props) => {
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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  

  
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchNetFlix())

  }, [])

  const netflixData = useSelector(state => state.netflix.movies, []) || []

  return (
    <div className="sliders" >
      <p style={{color:'#ffffff', fontSize:'1.7rem',position:'relative', top:'30px',fontWeight:"bold",marginBottom:'0'}}>Netflix 인기 컨텐츠</p>
      <Slider {...settings} className="csslider" style={{display:'flex',alignItems:'center'}}
              >

        {netflixData.results && netflixData.results.map(movie => (
          
          movie.overview ?
          <Movie props={movie} key={movie.id}/>
        : null
          
          ))}

      </Slider>
    </div>
    
  )
}

export default Netflix
