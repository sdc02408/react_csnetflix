import React, { useEffect, useState } from 'react'
import { fetchTrending } from '../_actions/user_action'
import { useDispatch, useSelector } from 'react-redux'
import Poster from '../components/views/commons/Poster'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../static/sass/components/Poster.scss'

//컴포넌트를 리덕스와 연동하려면 connect 함수가 필요해. connect(mapStateToProps, mapDispatchToProps)(연동 컴포넌트)

const TrendContainer = (props) => {
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
    dispatch(fetchTrending());
  }, []);

        //결과                   // 상태 선택함수
  const TrendData = useSelector(state => state.trending.trending, []) || [];
  console.log(TrendData,"terfensdf")

  return (
    <div className="sliderss" >
      <p style={{color:'#ffffff', fontSize:'1.7rem',position:'relative', top:'30px',fontWeight:"bold",marginBottom:'0'}}>몰아보기 추천</p>
      <Slider {...settings} className="csslider" style={{display:'flex',alignItems:'center'}}>

        {TrendData.results && TrendData.results.map(movie => (
        
          movie.overview ?
          <Poster props={movie} key={movie.id}/>
          :
            null
        ))}

      </Slider>
    </div>
  )
}

export default TrendContainer
