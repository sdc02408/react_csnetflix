import React from 'react';
import cx from 'classnames';
import SliderContext from 'client/src/components/views/Topten/context'
import ShowDetailsButton from 'client/src/components/views/Topten/ShowDetailsButton'
import Mark from 'client/src/components/views/Topten/Mark'
import { IMAGE_BASE_URL } from 'client/src/components/Config'
import './Item.scss'

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
  
          {NewMovies && NewMovies.map((NewMovies,index) => (
            <React.Fragment key={index}>
              <img src={`${IMAGE_BASE_URL}w300${NewMovies.poster_path}`} />
            </React.Fragment>
          ))}
  
         
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
