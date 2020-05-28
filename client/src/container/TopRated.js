import React ,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'

import {fetchTopRated} from "../_actions/user_action"
import Mmm from '../components/views/commons/Mmm'
const TopRated = (props) =>{

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTopRated())
  },[])
  
  const topRatedData = useSelector(state => state.toprated.movies,[]) || [];
  
  return (
    <div className="sliderr"  style={{display:'flex'}}>
    <p>Top Rated Movies</p>

    {topRatedData.results && topRatedData.results.map(movie => (
      
      <Mmm props={movie} key={movie.id}/>
    
    ))}
  
 
  </div>
  )
}

export default TopRated
