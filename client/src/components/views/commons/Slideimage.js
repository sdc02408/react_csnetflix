import React,{useRef, useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col,Carousel} from 'antd'
import {DownOutlined} from '@ant-design/icons'
import useHover from './use-hover';

function Slideimage(props) {
  const [hoverRef, isHovered] = useHover();
  // const hihoverv =(e) =>{
  //   e.target.style = 'transform: scale(1.5) !important';
  // }
  
  return (
    <a href="/" ref={hoverRef} >
      {isHovered ?
        <img src={props.image} style={{ width: '100%', }} className="slideimage boxer" />
        :
        <img src={props.image} style={{ width: '88%', }} className="slideimage"/>
      }
          <DownOutlined  style={{position:'relative',bottom:'5vh'}} ></DownOutlined>
    </a>
          )
}

export default Slideimage

