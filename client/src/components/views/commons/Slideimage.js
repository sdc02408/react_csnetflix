import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col,Carousel} from 'antd'
import {DownOutlined} from '@ant-design/icons'

function Slideimage(props) {
 

  const hihoverv =(e) =>{
    e.target.style = 'transform: scale(1.5) !important';

  }
 
  return (
    <a href="/">
      
          <img src={props.image} style={{width:'98%'}} className="slideimage"  onMouseOver={hihoverv}
             />
          <DownOutlined  style={{position:'relative',bottom:'5vh'}} ></DownOutlined>
    </a>
          )
}

export default Slideimage

