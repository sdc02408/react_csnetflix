import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../_actions/user_action';
import Movie from '../components/views/commons/Movie';
import {withRouter } from 'react-router-dom';

const TrendContainer = (props) => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTrending());
    
  }, []);
  
  const TrendData = useSelector(state => state.trending.movies, []) || [];
  console.log(TrendData)
  
  const [MainMovieImage, setMainMovieImage] = useState(null)
  
  return (
    <>
      
      <p>Trend Movies</p>
      <div className="movieContainer"> // 변경된 부분
        { TrendData.results && TrendData.results.map(movie => (
          <Movie props={movie} key={movie.id}/>
        
        ))}
      </div>
      
 
</>
  )
}

export default withRouter(TrendContainer);
