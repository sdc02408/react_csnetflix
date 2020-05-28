import React, { useState } from 'react'
import {DownOutlined} from '@ant-design/icons'
import '../../../static/sass/components/modal.scss'
import {Popover,Button,Modal} from 'antd'
import '../../../static/sass/components/Mmm.scss'

import { useSelector,useDispatch } from 'react-redux'


const Mmm = (props) => {
  
 
  const clickhi= () => {
    console.log("hi")
  }
  

  return (
    <>
      <div className="mmm" >
        <img style={{width:"98%"}} src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id} />
        <h3 className="detailTitle" style={{color:'white'}}>{props.props.name}</h3>
        <DownOutlined className="detailIcon"  style={{fontSize:"20px"}}></DownOutlined>
      </div>
      
     
    
    </>
  )
}


export default Mmm;
