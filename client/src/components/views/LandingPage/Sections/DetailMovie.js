import React from 'react';
import {Modal} from 'antd';

export const DetailMovie = ({name, overview, img, show, containerName,onClick,voteaverage,first_air_date}) => {
  
  return (
  

    
    show ?
      <div className={containerName} onClick={onClick}>
        <div className="modal">
          <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="bg"/>
          <div className="bg"></div>
          <div className="modal-content">
            <h1>{name}</h1>
            <p>{voteaverage}</p>
            <p>{first_air_date}</p>
            <p>{overview}</p>
            <div className="btn">
              <button><span>PLAY</span></button>
              <button><span>MY LIST</span></button>
              <button><span>DETAILS</span></button>
            </div>
          </div>
        </div>
      </div>
      :
      null

  )
};

export default DetailMovie
