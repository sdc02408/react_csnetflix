import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SearchOutlined } from '@ant-design/icons'
import '../static/sass/components/Search.scss'
import { Col, Input, Row } from 'antd'
import { useHistory } from 'react-router-dom'
import dotenv from 'dotenv'

dotenv.config()
const apikey = process.env.REACT_APP_API_KEYL

const SearchInput = () => {

  let history = useHistory()

  const [search, setSearch] = useState('')
  const [lists, setLists] = useState(false)
  const [movieLists, setMovieLists] = useState([])
  
  useEffect(() => {
    const urls = `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&query=${search}`
    fetchapi(urls)
  },[search])
  
  const fetchapi = (urls) => {
    fetch(urls)
    .then(response => response.json())
    .then(response => {
      setMovieLists(response.results)
    }).catch(err => {
      console.log("Error" + err);
    });
  }

  const onChange = (e) => {
    setSearch(e.target.value)
    fetchapi(setMovieLists)
    return history.push('/searchpage')
  }

  const clickSearch = () => {

    setLists(!lists)
  }
  



  return (
    <div className="searchEle" >

      <div className="inputEle" >
        {lists &&
        <Input className="searchText" style={{width:'80%'}}  type="text" value={search} onChange={onChange} placeholder="영어제목을 입력하세요"/>
        }
        
        <span className="searchIcon" style={{ color: '#ffffff',padding:'10px 15px' }} onClick={clickSearch}><SearchOutlined style={{fontSize:'18px'}}/></span>
     
      </div>

      <div id="searchContainer"   >
        {/*className={'searchMovie' + (lists ? "show" : "")}*/}

        <Row gutter={[24, 24]} className="searchContainerScroll">

          {movieLists && movieLists.map((movie,index) => (
            movie.poster_path ?
              <Col key={index} lg={3}  md={6} sm={12} xs={12}>

              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{ width: '100%' }}/>

            </Col> : null
          ))}

        </Row>
    
    </div>
    

    </div>
  )
}

export default SearchInput
