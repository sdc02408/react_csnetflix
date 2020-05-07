import React ,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import Movie from '../components/views/commons/Movie'
import {fetchTopRated} from "../_actions/user_action"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../static/sass/components/Netflix.scss';


const TopRated = (props) =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTopRated())
  },[])
  
  const topRatedData = useSelector(state => state.toprated.movies,[]) || [];
  
  return (
    <>
    <p>Top Rated Movies</p>
  <Slider {...settings} className="csslider">
  
    {topRatedData.results && topRatedData.results.map(movie => (
      
      <Movie props={movie} key={movie.id}/>
    
    ))}
  
  </Slider>
  </>
  )
}

export default TopRated
