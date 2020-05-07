import React from 'react';

export const DetailMovie = ({name, overview, img, show, containerName,onClick}) => {
  
  return (
    show ?
    
    <div className={containerName}  onClick={onClick}>
  
      <div className="modal">
        <img  src={`https://image.tmdb.org/t/p/original/${img}`} alt="bg"/>
        <div className="bg"></div>
        <div className="modal-content">
          <h1>{name}</h1>
          <p>{overview}</p>
        
        </div>
      </div>
      
    </div>
      :
      null
  )
};

export default DetailMovie
