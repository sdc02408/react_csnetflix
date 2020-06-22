// import React, { useEffect, useState } from 'react'
// import { Button } from 'antd'
// import Axios from 'axios'
// // import { useDispatch } from 'react-redux'
//
// const Favorite = (props) => {
//
//   // movie에서 받아온 정보들
//   const movieId=props.movieId
//   const movieTitle=props.movieTitle
//   const moviePost=props.backdrop_path
//   const userFrom=props.userFrom
//
//   const [FavoriteNumber, setFavoriteNumber] = useState(0)
//   const [Favorited, setFavorited] = useState(false)
//
//   let variables = {
//     userForm: userFrom,
//     movieId: movieId,
//     movieTitle:movieTitle,
//     moviePost:moviePost
//   }
//   //
//   // const dispatch = useDispatch()
//   //
//   useEffect(() =>{
//
//     Axios.post('/api/favorite/favoriteNumber', variables )
//     .then(response =>{
//       setFavoriteNumber(response.data.favoriteNumber)
//
//       if(response.data.success){
//       }else{
//         alert('숫자 정볼를 가져오는데 실패 했습니다.')
//       }
//     })
//
//     Axios.post('/api/favorite/favorited', variables )
//     .then(response =>{
//       if(response.data.success){
//         setFavorited(response.data.favorited)
//
//       }else{
//         alert('정보를 가져오는데 실패했습니다')
//       }
//     })
//   })
//
//
//   const onClickFavorite = () => {
//
//     if(Favorited){
//       Axios.post('/api/favorite/removeFromFavorite',variables )
//       .then(response => {
//         if(response.data.success) {
//           setFavoriteNumber(FavoriteNumber -1)
//           setFavorited(!Favorited)
//         } else{
//           alert('FavoritePage 리스트에서 지우는걸 실패했습니다.')
//         }
//       })
//
//     } else{
//       Axios.post('/api/favorite/addToFavorite',variables )
//       .then(response => {
//         if(response.data.success) {
//           setFavoriteNumber(FavoriteNumber + 1)
//           setFavorited(!Favorited)
//         } else{
//           alert('FavoritePage 리스트에서 추가하는걸 실패했습니다.')
//         }
//       })
//     }
//   }
//
//   return (
//     <>
//       <Button onClick={onClickFavorite}>
//         {Favorited ? "싫어요" : "좋아요"}{FavoriteNumber}
//       </Button>
//     </>)
// }
//
// export default Favorite;
