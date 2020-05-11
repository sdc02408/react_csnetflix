import React, { useState } from 'react'
import {DownOutlined} from '@ant-design/icons'
import '../../../static/sass/components/modal.scss'
import {Popover,Button,Modal} from 'antd'
import DetailMovie from '../LandingPage/Sections/DetailMovie'

import { useSelector,useDispatch } from 'react-redux'


const Movie = (props) => {
 
  const [modal,setModal] = useState(false)
  // const [chass, setChass] = useState("")
  
  const clickhi= () => {
    console.log("hi")
    //   var changes = document.getElementsByClassName("sliders")
    //   console.log(changes,"chages")
    // }
  }
  
  const showModal = () => {
    setModal(true);
    clickhi()
  }
  
  const closeModal = () => {
    setModal(false);
  }
  
  return (
    <>
      <div className="movie" >
        <img style={{width:"98%"}} src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id} />
          <DownOutlined className="detailIcon" onClick={() => showModal()} style={{fontSize:"20px"}}></DownOutlined>
      </div>
  
      <DetailMovie
        containerName={"modalContainer " + (modal ? "show" : "hide")}
        name={props.props.title}
        overview={props.props.overview}
        show={modal}
        img={props.props.backdrop_path}
        onClick={() => closeModal()}
        voteaverage={props.props.vote_average}
        date={props.props.first_air_date}
      />
      
    </>
  )
}


export default Movie;
