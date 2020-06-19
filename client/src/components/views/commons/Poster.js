import React, { useState } from 'react'
import { SoundFilled, DownOutlined, CloseOutlined, CaretRightOutlined, InfoCircleOutlined,PlusCircleOutlined,PlayCircleFilled ,PlayCircleOutlined } from '@ant-design/icons'
import { Popover, Button, Modal } from 'antd'
import '../../../static/sass/components/Poster.scss'
import SetButton from './SetButton'

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
        <p className="detailVoteAverage" >{props.props.vote_average}</p>
        <p className="detailLan" >{props.props.original_language}</p>
        <SoundFilled className="soundBtn"/>
        <PlusCircleOutlined className="plusBtn"/>
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
        
        <div className="rigthmoal"
             style={{
               width: '100%', position: 'relative',
               background: `url('https://image.tmdb.org/t/p/original/${props.props.backdrop_path}')`,
               height: '500px',
               backgroundSize: ' cover',
             }}>
          
          <div style={{
            width: '60%',
            backgroundColor: 'black',
            height: 'inherit',
            background: 'linear-gradient(90deg, #000 50%, transparent)',
          }} className="modalLeft">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '500px',
              marginLeft: '50px',
            }}>
              <p id={'modaltitle'}>{props.props.title}</p>
              
              <div className={'subinfo'}>
                <span className={'modalaverage'}>평점 {props.props.vote_average}</span>
                <span className={'modalfirstdate'}>개봉일 {props.props.first_air_date}</span>
              </div>
              
              <p id={'modaloverview'}>{props.props.overview}</p>
              
         <SetButton />
         
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Poster
