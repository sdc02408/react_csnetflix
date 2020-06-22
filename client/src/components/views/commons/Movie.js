import React, { useState } from 'react'
import {
  DownOutlined,
  CloseOutlined,
  HeartOutlined,
  CaretRightOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
  LikeOutlined,
  DislikeOutlined,
  PlayCircleOutlined,
  PlayCircleFilled,
} from '@ant-design/icons'
import { Popover, Button, Modal } from 'antd'
import Favorite from '../../../container/Favorite'
import '../../../static/sass/components/Movie.scss'
import SetButton from './SetButton'
import Star from '../../../static/star.png'
import FavoriteBtn from './FavoriteBtn'


const Movie = (props) => {
  const [modal, setModal] = useState(false)
  
  const showModal = () => {
    setModal(true)
  }
  
  const closeModal = () => {
    setModal(false)
  }
  
  return (
    <>
      <div className="movie">
        
        <img style={{ width: '98%' }} src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`}
             alt={props.props.id}/>
        
        <PlayCircleFilled className="playBtn"/>
        <p className="detailTitle">{props.props.name}{props.props.title}</p>
        <img src={Star} className="voteStart"/>
        <p className="detailVoteAverage">{props.props.vote_average}</p>
        <p className="releaseDateText">개봉연도</p>
        {props.props.first_air_date &&
        <p className="releaseDate">{props.props.first_air_date.substr(0, 4)}</p>
        }
        {props.props.release_date &&
        <p className="releaseDate">{props.props.release_date.substr(0, 4)}</p>
        }
       
        <LikeOutlined className="likeBtn"/>
        <DislikeOutlined className="dislikeBtn"/>
        <HeartOutlined className="plusBtn"/>
       
        <DownOutlined className="detailIcon" onClick={showModal} style={{ fontSize: '20px' }}></DownOutlined>
      </div>
      
      <Modal
        maskClosable={false}
        visible={modal}
        centered
        closeIcon={<DownOutlined/>}
        bodyStyle={{ width: '100%', height: 'auto', display: 'flex' }}
        onCancel={false}
      >
        <CloseOutlined style={{
          color: 'white', float: 'right', fontSize: '20px',
          position: 'absolute', right: '35px', zIndex: '200', top: '35px',
        }} className="closeBtn" onClick={() => closeModal()}/>
        
        <div className="mainmodal"
             style={{
               width: '100%', position: 'relative',
               background: `url('https://image.tmdb.org/t/p/original/${props.props.backdrop_path}')`,
               height: '500px',
               backgroundSize: ' cover',
             }}>
          
          <div className="modalLeft">
            <div className="modalInfo">
              <p id={'modaltitle'}>{props.props.name}{props.props.title}</p>
              
              <div className={'subinfo'}>
                <span className={'modalaverage'}>평점 {props.props.vote_average}</span>
                <span className={'modalfirstdate'}>개봉일 {props.props.first_air_date}</span>
              </div>
              
              <p id={'modaloverview'}>{props.props.overview}</p>
              
              <SetButton />
              
              <FavoriteBtn
                movieId={props.props.id}
                movieTitle={props.props.name}
                moviePost={props.props.poster_path}
                userFrom={localStorage.getItem('userId')}/>
         
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Movie
