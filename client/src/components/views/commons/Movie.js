import React from 'react';

const Movie = (props) => {
  
  return (
    <>
      <div className="movie">
        <img style={{width:"100%"}} src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
      </div>
     
    </>
  )
}

export default Movie;
