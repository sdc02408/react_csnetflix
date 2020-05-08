import React, { useState } from 'react'
import {DownOutlined} from '@ant-design/icons'
import '../../../static/sass/components/modal.scss'
import {Popover,Button} from 'antd'
import DetailMovie from '../LandingPage/Sections/DetailMovie'

import { useSelector,useDispatch } from 'react-redux'


const Movie = (props) => {
  
  const [modal,setModal] = useState(false)
  
  const showModal = () => {
    setModal(true);
  }
  
  const closeModal = () => {
    setModal(false);
  }
  
  
  // const text = <span>
  // </span>
  // const content = (
  //   <div>
  //     {props.props.original_name}
  //     <p></p>
  //     <p>Content</p>
  //     <img  src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
  //   </div>
  // );


  return (
    <>
      <div className="movie" onClick={() => showModal()} >
        <img style={{width:"98%"}} src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id} />
        {/*<Popover placement="bottom" autoAdjustOverflow="true"  className="detailContent" title={text} content={content} trigger="click" overlayStyle={{margin:" 0 auto"}}>*/}
          <DownOutlined className="detailIcon"  style={{fontSize:"20px"}}></DownOutlined>
        {/*</Popover>*/}
      </div>
  
      <DetailMovie
        containerName={"modalContainer " + (modal ? "show" : "hide")}
        name={props.props.title}
        overview={props.props.overview}
        show={modal}
        img={props.props.backdrop_path}
        onClick={() => closeModal()}
      />
      
    </>
  )
}

export default Movie;
