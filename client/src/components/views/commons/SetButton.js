import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { CaretRightOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons'
import Axios from 'axios'
import '../../../static/sass/components/SetButton.scss'

const SetButton = (props) =>{
  
  // movie에서 받아온 정보들
  const movieId=props.movieId
  const movieTitle=props.movieTitle
  const moviePost=props.moviePost
  const userFrom=props.userFrom
  
  const [Favorited, setFavorited] = useState(false)
  
  let variables = {
    userForm: userFrom,
    movieId: movieId,
    movieTitle:movieTitle,
    moviePost:moviePost
  }
  
  useEffect(() =>{
    
    // Axios.post('/api/favorite/favoriteNumber', variables )
    // .then(response =>{
    //   setFavoriteNumber(response.data.favoriteNumber)
    //
    //   if(response.data.success){
    //   }else{
    //     alert('숫자 정볼를 가져오는데 실패 했습니다.')
    //   }
    // })
    
    Axios.post('/api/favorite/favorited', variables )
    .then(response =>{
      if(response.data.success){
        setFavorited(response.data.favorited)
        
      }else{
        alert('정보를 가져오는데 실패했습니다')
      }
    })
  })
  
  
  const onClickFavorite = () => {
    
    if(Favorited){
      Axios.post('/api/favorite/removeFromFavorite',variables )
      .then(response => {
        if(response.data.success) {
 
          setFavorited(!Favorited)
        } else{
          alert('내가 찜한 콘텐츠에서 삭제되었습니다.')
        }
      })
      
    } else{
      Axios.post('/api/favorite/addToFavorite',variables )
      .then(response => {
        if(response.data.success) {
          setFavorited(!Favorited)
        } else{
          alert('FavoritePage 리스트에서 추가하는걸 실패했습니다.')
        }
      })
    }
  }
  
  return (
    <>
  
      <div className="setBtn">
        
        <Button className="playBtn" size="large" >
          <CaretRightOutlined style={{fontSize:'20px',color:'#181818', fontWeight:'bold'}} />
          재생</Button>
        <Button size="large" className="detailBtn" onClick={onClickFavorite}>
     
          {Favorited ? <CheckOutlined style={{fontSize:'20px'}} /> : <PlusOutlined  style={{fontSize:'20px'}} />}내가 찜한 콘텐츠</Button>
  
      </div>
      </>
  )
}

export default SetButton




