import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Col,Row} from 'antd'
const FavoritePage = () => {
  
  const [Favorites,setFavorites] = useState([])
  
  useEffect(() => {
    fetchFavoredMovie()
  },[])
  
  const fetchFavoredMovie = () => {
    Axios.get('/api/favorite/getFavoredMovie', {userFrom: localStorage.getItem('userId')})
    .then(response => {
      if(response.data.success){
        setFavorites(response.data.favorites)
      } else {
        alert(' 영화 정보를 가져오는데 실패')
      }
    })
  }
  
  return (
    
    <>
      <h2 style={{color:'white',position:'relative',margin:'0 auto', top:'100px',width:'95%',paddingLeft:'12px'}}>내가 찜한 콘텐츠</h2>
    <Row gutter={[24, 24]} style={{width:'95%', margin:'0 auto',position:'relative',top:'100px'}}>

      
      {Favorites && Favorites.map((favoritea,index) => (
        <Col key={index} lg={3}  md={6} sm={12} xs={12}>
          <img src= {`https://image.tmdb.org/t/p/original/${favoritea.moviePost}`} style={{width:'100%'}}/>
        </Col>
      ))}
      
    </Row>
      
      </>
  )
}

export default FavoritePage
