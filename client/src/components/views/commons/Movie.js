import React, { useState } from 'react'
import {DownOutlined,CloseOutlined} from '@ant-design/icons'
import '../../../static/sass/components/modal.scss'
import {Popover,Button,Modal} from 'antd'
import DetailMovie from '../LandingPage/Sections/DetailMovie'
import '../../../static/sass/components/Movie.scss'
import { useSelector,useDispatch } from 'react-redux'


const Movie = (props) => {
 
  const [modal,setModal] = useState(false)
  // const [chass, setChass] = useState("")
  
  const clickhi= () => {
    console.log("hi")
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
        <h3 className="detailTitle" style={{color:'white'}}>{props.props.name}</h3>
          <DownOutlined className="detailIcon" onClick={() => showModal()} style={{fontSize:"20px"}}></DownOutlined>
      </div>
      
      
      
      <Modal
       
        maskClosable={false}
        visible={modal}
        centered
        closeIcon={<DownOutlined/> }
        bodyStyle={{width:'100%',height:'auto',display:'flex'}}
        onCancel={false}
      >
        <CloseOutlined style={{color:'white',float:'right',fontSize:'20px',
          position:'absolute', right:'35px',zIndex:'200',top:'35px'}}  onClick={() => closeModal()} />
        
        <div style={{width:'35%', backgroundColor:'black' }} className="modalLeft">
          <p>{props.props.name}</p>
          <p>{props.props.overview}</p>
        </div>
        
       
      
        <div className="rigthmoal" style={{width:'65%',position:'relative'}}>
          <div style={{width:'10%',backgroundImage: 'linear-gradient(to right,#000,transparent);'}}>
          </div>
          <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} style={{width:'100%'}}></img>
        </div>
      {/*  style={{*/}
      {/*  background: `url('https://image.tmdb.org/t/p/original/${props.props.backdrop_path}')`,*/}
      {/*  backgroundRepeat: 'no-repeat',*/}
      {/*  backgroundSize: 'cover',*/}
      {/*  backgroundPosition: 'center, center',*/}
      {/*  zIndex: '0',*/}
      {/*  width: '65%',*/}
      {/*}}>*/}
      
      
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


export default Movie;
