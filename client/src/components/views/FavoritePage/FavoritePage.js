import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { IMAGE_BASE_URL } from '../../Config'


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
         console.log(response.data.favorites,"xcxcxc")
      } else {
        alert(' 영화 정보를 가져오는데 실패')
      }
    })
  }
  
  // const onClickDelete = (movieId, userFrom) => {
  //   const variables = {
  //     movieId,
  //     userFrom
  //   }
  //
  //   Axios.post('/api/favorite/removeFromFavorite', variables)
  //   .then(response => {
  //     if(response.data.success){
  //       fetchFavoredMovie()
  //     } else{
  //       alert('리스트에서 지우는것 실패')
  //     }
  //   })
  // }
  //

console.log(Favorites.moviePost,"tlqk")
  
  

  return (
  <>
    <div style={{width:'85%', margin: '3rem auto'}}>
      <h2> Favorite Movies</h2>
  
      {Favorites && Favorites.map(favoritea => (
        <img src={`${IMAGE_BASE_URL}w500${favoritea.moviePost}`} />
        ))}
        
        
    
    </div>
        </>
  )
}

export default FavoritePage
