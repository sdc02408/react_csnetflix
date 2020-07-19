import React, { useEffect, useState } from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Popover, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNetFlix } from '../../../../_actions/user_action'
import '../../../../static/sass/components/Alarm.scss'

function Alarm () {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    dispatch(fetchNetFlix())
    
  }, [])
  const newMovieData = useSelector(state => state.newmovie.newMovie, []) || []
  
  const Content = (
    <div>
      
      {newMovieData.results && newMovieData.results.filter(person => person.vote_average > 6.5).map((movie, index) => (
        <div className="alarmBox" key={index}>
          <img style={{ width: '112px', margin: '10px 0' }}
               src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
          <div className="alarmBoxTitleContainer">
            <p className="alarmBoxTitle">신규 콘텐츠</p>
            <p className="alarmBoxTitle" key={index}>{movie.title}</p>
          </div>
        </div>
      
      ))}
    
    </div>
  )
  
  return (
    
    <>
      <Popover placement="bottom" content={Content} trigger="click">
        <a className="searchLogo" style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600' }}><BellOutlined
          style={{ fontSize: `18px` }}/></a>
      </Popover>
    </>
  )
}

export default Alarm
