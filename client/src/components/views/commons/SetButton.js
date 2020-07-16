import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { CaretRightOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons'
import Axios from 'axios'

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
  
      <div style={{display:'flex'}}>
        <Button size="large" style={{color:'#181818',borderRadius:'0.3rem', paddingLeft:'calc(3.6rem / 2)', paddingRight:'calc(3.6rem / 2)', fontWeight:'bold',marginRight:'1rem' }}>
          <CaretRightOutlined style={{fontSize:'20px',color:'#181818', fontWeight:'bold'}} />
          재생</Button>
        <Button size="large" onClick={onClickFavorite}
                style={{borderRadius:'0.3rem', paddingLeft:'calc(3.6rem / 2)', paddingRight:'calc(3.6rem / 2)',
                  fontWeight:'bold',marginRight:'1rem',backgroundColor:'rgba(133,133,133,0.6)', color:'white',border:'unset'}}>
     
          {Favorited ? <CheckOutlined style={{fontSize:'20px'}} /> : <PlusOutlined  style={{fontSize:'20px'}} />}내가 찜한 콘텐츠</Button>
  
      </div>
      </>
  )
}

export default SetButton




