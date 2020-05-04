// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import {API_KEY,API_URL,IMAGE_BASE_URL} from '../../Config'
// import MainImage from './Sections/MainImage'
// import Slideimage from '../commons/Slideimage'
// // import Common_slide from '../commons/common_slide'
// import MainText from './Sections/MainText.jsx'
// import {DownOutlined,RightOutlined} from '@ant-design/icons'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {withRouter} from 'react-router-dom';
//
//
//
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//
//
//   return (
//
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//
//     />
//
//   );
// }
//
//
// function LandingPage (props) {
//
//   const [Movies, setMovies] = useState([])
//   const [MainMovieImage, setMainMovieImage] = useState(null)
//   const [Tv, setTv] = useState([])
//
//
//
//   useEffect(() => {
//     const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
//     fetchMovies(endpoint)
//
//     const tvshow = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
//     fetchTv(tvshow)
//
//     // const newmovie = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
//     // fetchNewMovie(newmovie)
//     //
//   }, [])
//
//   const fetchMovies = (endpoint) => {
//     fetch(endpoint)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response)
//       setMovies([...Movies, ...response.results])
//       setMainMovieImage(response.results[1])
//     })
//   }
//
//   const fetchTv = (tvshow) => {
//     fetch(tvshow)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response)
//       setTv([...Tv, ...response.results])
//
//     })
//   }
//
//   // const fetchNewMovie = (newmovie) => {
//   //   fetch(newmovie)
//   //   .then(response => response.json())
//   //   .then(response => {
//   //     console.log(response)
//   //     setNewMovies([...NewMovies, ...response.results])
//   //
//   //   })
//   // }
//   //
//
//   const settings = {
//
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 6,
//     cssEase:'linear',
//     nextArrow: <SampleNextArrow />,
//   };
//
//
//   return (
//     <div style={{width:'100%', margin:'0'}}>
//
//
//       {MainMovieImage &&
//       <MainImage
//         image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
//
//       />
//       }
//
//
//       {MainMovieImage &&
//       <MainText
//         title={MainMovieImage.original_title}
//         text={MainMovieImage.overview}
//       />
//       }
//
//
//
//
//       <div style={{width:'95%', margin:'0 auto'}} className='slideboxer'>
//         <div className='slide-title'>Netflix 인기 콘텐츠</div>
//         <Slider {...settings} >
//         {Movies && Movies.map((movie,index) => (
//           <React.Fragment key={index}  >
//           <Slideimage
//             image={`${IMAGE_BASE_URL}w500${movie.poster_path}`}
//           />
//
//           </React.Fragment>
//           ))}
//         </Slider>
//       </div>
//
//       <div style={{width:'95%', margin:'3vh auto'}}>
//         <div className='slide-title'> 내가 찜한 콘텐츠</div>
//         <Slider {...settings}>
//           {Tv && Tv.map((tv,index) => (
//             <React.Fragment key={index}>
//               <Slideimage
//                 image={tv.backdrop_path ?
//                   `${IMAGE_BASE_URL}w300${tv.poster_path}` : null }
//
//               />
//             </React.Fragment>
//           ))}
//         </Slider>
//       </div>
//
//
//       <div className="movie">
//         <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
//       </div>
//
//
//       {/*{NewMovies && Movies.map((newmovie,index) => (*/}
//       {/*  <Common_slide*/}
//       {/*    image={`${IMAGE_BASE_URL}w300${newmovie.poster_path}`}*/}
//       {/*  />*/}
//       {/*))}*/}
//
//
//
//     </div>
//
//   )
// }
//
//
// export default withRouter(LandingPage)
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandingPage (props) {
  return (
    <>
      <div className="movie">
        <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
      </div>
  

      
    </>
  )
}

export default LandingPage
