import React, { useState } from 'react'
import { DownOutlined, CloseOutlined, CaretRightOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Popover, Button, Modal } from 'antd'
import DetailMovie from '../LandingPage/Sections/DetailMovie'
import '../../../static/sass/components/Movie.scss'
import { useSelector, useDispatch } from 'react-redux'

const Movie = (props) => {
  
  const [modal, setModal] = useState(false)
  // const [chass, setChass] = useState("")
  
  const clickhi = () => {
    console.log('hi')
  }
  
  const showModal = () => {
    setModal(true)
    clickhi()
  }
  
  const closeModal = () => {
    setModal(false)
  }
  
  return (
    <>
      <div className="movie">
        <img style={{ width: '98%' }} src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`}
             alt={props.props.id}/>
        <h3 className="detailTitle" style={{ color: 'white' }}>{props.props.name}</h3>
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
              <p id={'modaltitle'}>{props.props.name}</p>
              
              <div className={'subinfo'}>
                <span className={'modalaverage'}>평점 {props.props.vote_average}</span>
                <span className={'modalfirstdate'}>개봉일 {props.props.first_air_date}</span>
              </div>
              
              <p id={'modaloverview'}>{props.props.overview}</p>
              
              
              <div className={'modalBtn'}>
                <Button size="large" style={{
                  color: '#181818',
                  borderRadius: '0.3rem',
                  paddingLeft: 'calc(3.6rem / 2)',
                  paddingRight: 'calc(3.6rem / 2)',
                  fontWeight: 'bold',
                  marginRight: '1rem',
                }}>
                  <CaretRightOutlined style={{ fontSize: '20px', color: '#181818', fontWeight: 'bold' }}/>
                  재생</Button>
                <Button size="large" style={{
                  borderRadius: '0.3rem',
                  paddingLeft: 'calc(3.6rem / 2)',
                  paddingRight: 'calc(3.6rem / 2)',
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  backgroundColor: 'rgba(133,133,133,0.6)',
                  color: 'white',
                  border: 'unset',
                }}>
                  <InfoCircleOutlined style={{ fontSize: '20px' }}/>
                  상세정보</Button>
              </div>
            </div>
          
          
          </div>
        
        
        </div>
      </Modal>
      
      
      {/*<DetailMovie*/}
      {/*  containerName={"modalContainer " + (modal ? "show" : "hide")}*/}
      {/*  name={props.props.title}*/}
      {/*  overview={props.props.overview}*/}
      {/*  show={modal}*/}
      {/*  img={props.props.backdrop_path}*/}
      {/*  onClick={() => closeModal()}*/}
      {/*  voteaverage={props.props.vote_average}*/}
      {/*  date={props.props.first_air_date}*/}
      {/*/>*/}
    
    </>
  )
}

export default Movie
