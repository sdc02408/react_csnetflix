import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_KEY,API_URL,IMAGE_BASE_URL} from '../../Config'
import {DownOutlined,RightOutlined} from '@ant-design/icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withRouter} from 'react-router-dom';

function common_slide(props) {



  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    cssEase:'linear',
  
  };
  
  return (

      <div style={{width:'95%', margin:'0 auto'}} className='slideboxer'>
        <div className='slide-title'>this is</div>
        <Slider {...settings} >
              <a href="/" >
                <img src={props.image} style={{ width: '100%', }} className="slideimage boxer" />
                <DownOutlined  style={{position:'relative',bottom:'5vh'}} ></DownOutlined>
              </a>
        </Slider>
      </div>

  
  )
}

export default withRouter(common_slide)
