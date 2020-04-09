import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_KEY,API_URL,IMAGE_BASE_URL} from '../../Config'
import {DownOutlined,RightOutlined} from '@ant-design/icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withRouter} from 'react-router-dom';

function common_slide (props) {
  
  const [Moviesi, setMoviesi] = useState([])
  
  useEffect(() => {
    const endpointi = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    fetchMoviesi(endpointi)
  }, [])
  
  const fetchMoviesi = (endpointi) => {
    fetch(endpointi)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setMoviesi([...Moviesi, ...response.results])
    })
  }
  
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    cssEase:'linear',
  
  };
  
  return (
    <div style={{width:'100%', margin:'0'}}>
      
      <div style={{width:'95%', margin:'0 auto'}} className='slideboxer'>
        <div className='slide-title'>Netflix 인기 콘텐츠</div>
        <Slider {...settings} >
          {Moviesi && Moviesi.map((moviee,indexc) => (
            <React.Fragment key={indexc}  >
              <a href="/" >
                  <img src={`${IMAGE_BASE_URL}w500${moviee.poster_path}`} style={{ width: '100%', }} className="slideimage boxer" />
                  
                <DownOutlined  style={{position:'relative',bottom:'5vh'}} ></DownOutlined>
              </a>
            
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </div>
  
  )
}




export default withRouter(common_slide)
