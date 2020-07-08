import React, { useState } from 'react'
import { CloseOutlined, DownOutlined, HeartOutlined, PlayCircleFilled, SoundFilled } from '@ant-design/icons'
import { Modal } from 'antd'
import '../../../static/sass/components/Poster.scss'
import Star from '../../../static/star.png'
import Modalpage from '../commons/Modal'

const Poster = (props) => {

  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <div className="postermovie">

        <img style={{ width: '98%' }} src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`}
             alt={props.props.id}/>

        <PlayCircleFilled className="playBtn"/>
        <p className="detailTitle" >{props.props.title}{props.props.name}</p>
        <img src={Star} className="voteStart"/>
        <p className="detailVoteAverage" >{props.props.vote_average}</p>
        <p className="releaseDateText">개봉연도</p>

        {props.props.first_air_date &&
        <p className="releaseDate">{props.props.first_air_date.substr(0,4)}</p>
        }
        
        {props.props.release_date &&
        <p className="releaseDate">{props.props.release_date.substr(0,4)}</p>
        }
        
        <SoundFilled className="soundBtn"/>
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
        }} onClick={() => closeModal()}/>
  
        <Modalpage
          backdrop_path={props.props.backdrop_path}
          name={props.props.name}
          title={props.props.title}
          vote_average={props.props.vote_average}
          first_air_date={props.props.first_air_date}
          overview={props.props.overview}
          id={props.props.id}
          name={props.props.name}
          poster_path={props.props.poster_path}
        />
      </Modal>
    </>
  )
}

export default Poster
