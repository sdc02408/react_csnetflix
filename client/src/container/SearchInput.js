import React, { useState } from 'react'
import {API_KEY,API_URL,IMAGE_BASE_URL} from '../components/Config'
import axios from 'axios';
import {SearchOutlined} from '@ant-design/icons'
import '../static/sass/components/modal.scss'
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [lists, setLists] = useState(false);
  const [movieLists, setMovieLists] = useState([]);
  
  
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=&include_adult=false&query=${search}&language=en-US&page=1`;
   console.log(url,"fdfd")
  let data = [];
  
  const fetch = async () => {
    const response = await axios.get(url);
    data = response.data.results || [];
    setMovieLists(data);
  }
  
  const onChange = (e) => {
    setSearch(e.target.value);
    fetch(setMovieLists());
    setLists(true);
  }
  
  const hideLists = () => {
    setLists(false);
    setSearch('');
  }
  
  return (
    <div className="searchContainer">
      <div className="inputContainer">
        <input className="search-txt" type="text" value={search} onChange={onChange} placeholder="title"/>
        <a className="searchLogo"><SearchOutlined/></a>
      </div>
      <div className={"searchMovie " + (lists ? "show" : "")} onClick={() => hideLists()}>
        <div className="listContainer">
          { movieLists && movieLists.map(movie => (
            <List props={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

const List = (props) => {
  
  return (
    <>
      <div className="lists">
        <img src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`}
        />
      </div>
    </>
  )
}

export default SearchInput
