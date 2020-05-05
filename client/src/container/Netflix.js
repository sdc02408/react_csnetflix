import React, { useEffect, useState } from 'react'
import {fetchNetFlix} from '../_actions/user_action';
import MainText from '../components/views/LandingPage/Sections/MainText'
import MainImage from '../components/views/LandingPage/Sections/MainImage'
import { useDispatch,useSelector } from 'react-redux'

const Netflix = (props) => {
  const [MainMovieImage, setMainMovieImage] = useState(null)
  
  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(fetchNetFlix());

  },[])
  
  return (
    <>
      {MainMovieImage.results &&
       <MainText
        title={props.original_title}
        text={props.overview}
      />}
      
      </>
  )
}

export default Netflix
