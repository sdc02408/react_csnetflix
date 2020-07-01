// import React from 'react'
// import '../../../../static/sass/components/modal.scss'
// import MainPageBtn from './MainPageBtn'
//
// function MainPageModal (props) {
//
//   return (
//     <>
//       <div className="mainmodal"
//            style={{
//              width: '100%', position: 'relative',
//              background: `url('https://image.tmdb.org/t/p/original/${props.backdrop_path}')`,
//              height: '500px',
//              backgroundSize: ' cover',
//            }}>
//
//         <div className="modalLeft">
//           <div className="modalInfo">
//             <p id={'modaltitle'}>{props.name}{props.title}</p>
//
//             <div className={'subinfo'}>
//               <span className={'modalaverage'}>평점 {props.vote_average}</span>
//               <span className={'modalfirstdate'}>개봉일 {props.first_air_date}</span>
//             </div>
//
//             <p id={'modaloverview'}>{props.overview}</p>
//
//             <MainPageBtn
//               movieId={props.id}
//               movieTitle={props.name}
//               moviePost={props.poster_path}
//               userFrom={localStorage.getItem('userId')}/>
//
//           </div>
//         </div>
//       </div>
//
//
//     </>
//   )
// }
//
// export default MainPageModal
