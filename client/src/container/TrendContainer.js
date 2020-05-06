import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../_actions/user_action';
import Movie from '../components/views/commons/Movie';
import {withRouter } from 'react-router-dom';

//컴포넌트를 리덕스와 연동하려면 connect 함수가 필요해. connect(mapStateToProps, mapDispatchToProps)(연동 컴포넌트)

const TrendContainer = (props) => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTrending());
    
  }, []);
  
        //결과                   // 상태 선택함수
  const TrendData = useSelector(state => state.trending.movies, []) || [];
  console.log(TrendData)
  
  const [MainMovieImage, setMainMovieImage] = useState(null)
  
  return (
    <>
      
      <p>Trend Movies</p>
      <div className="movieContainer">
        { TrendData.results && TrendData.results.map(movie => (
          <Movie props={movie} key={movie.id}/>
        
        ))}
      </div>
      
 
</>
  )
}

export default withRouter(TrendContainer);
