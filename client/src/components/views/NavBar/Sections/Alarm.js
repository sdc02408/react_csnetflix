import React, { useEffect } from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Popover, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { fetchNetFlix } from '../../../../_actions/user_action'

function Alarm () {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    dispatch(fetchNetFlix())
    
  }, [])
  const newMovieData = useSelector(state => state.newmovie.newMovie, []) || []
  console.log( newMovieData.results.length,"newmoviedate")
  

  
  
  
  const text = <span>Title</span>;
  const Content = (
    <div>
      <p>Content</p>
      {newMovieData.results && newMovieData.results.map((movie,index) => (
      <div key={index}>
        <p>{movie.title}</p>
      </div>
      ))}
      
   
    </div>
  );
  
  
  return(
    
    <>
      
        <Popover placement="bottom" title={text} content={Content} trigger="click">
          <a className="searchLogo" style={{color:'#ffffff',fontSize: '20px',fontWeight: '600'}} ><BellOutlined/></a>
        </Popover>
    
      
  </>)
}

export default Alarm
