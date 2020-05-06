import React ,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import Movie from '../components/views/commons/Movie'
import {fetchTopRated} from "../_actions/user_action"
// import MainText from '../components/views/LandingPage/Sections/MainText'


const TopRated = (props) =>{
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTopRated())
  },[])
  
  const topRatedData = useSelector(state => state.toprated.movies,[]) || [];
  
  return (
    <div>
      <p>Top Rated Movies</p>
      <div className="movieContainer">
        {topRatedData.results && topRatedData.results.map(movie => (
          <Movie props={movie} key={movie.id}/>
        ))}
    </div>
    </div>
  )
}

export default TopRated
