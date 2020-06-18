import React, { useState,useEffect } from 'react'
import {API_KEY,API_URL,IMAGE_BASE_URL} from '../components/Config'
import axios from 'axios';
import {SearchOutlined} from '@ant-design/icons'
import '../static/sass/components/Search.scss'
import {Input} from 'antd'
import SearchPage from '../components/views/SearchPage/SearchPage'
import { withRouter, useHistory } from 'react-router-dom'
import {Noimage} from '../components/views/SearchPage/noimage.jpg'

const SearchInput = () => {
  
  let history = useHistory()
  
  const [search, setSearch] = useState('');
  const [lists, setLists] = useState(false);
  const [movieLists, setMovieLists] = useState([]);
 
 
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&query=${search}`;
  let data = [];

  const fetch = async () => {
    const response = await axios.get(url);
    data = response.data.results || [];
    setMovieLists(data);
  }
  
  const onChange = (e) => {
    setSearch(e.target.value);
    fetch(setMovieLists)
   
    return history.push('/searchpage', movieLists)
  }
  console.log(search,"ccc")
  
  // const hideLists = () => {
  //   setLists(false);
  //   setSearch('');
  // }

  return (
    <div className="searchContainer" style={{padding: '10px 1px'}}>
     
      <div className="inputContainer">
  
        {lists &&
        <Input className="searchText"  type="text" value={search} onChange={onChange} placeholder="제목을 입력하세요"/>
        }
        <a className="searchLogo" style={{color:'#ffffff'}} onClick={() => setLists(!lists)}><SearchOutlined/></a>
       
      </div>
      
      <div className={"searchMovie " + (lists ? "show" : "")} style={{width:'100%',position:'fixed',left:'0px',top:'100px'}}>
        <div className="listContainer" style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
       
          { movieLists && movieLists.map(movie => (
            <SearchPage props={movie} imageList={movie.poster_path ?
              `https://image.tmdb.org/t/p/original/${movie.poster_path}` : null} key={movie.id}/>
              ))}
          </div>
        
      </div>
    </div>
  )
}

// const List = (props) => {
//
//   return (
//     <>
//       <div style={{width:'100%'}}>
//         <img src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`} style={{width:'150px'}}
//         />
//       </div>
//     </>
//   )
// }

export default SearchInput
