import React, { useState } from 'react'
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


    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=kr&page=1&query=${search}`

  const fetch = async () => {
    const response = await axios.get(url)
    setMovieLists(response.data.results)
  }


  const onChange = (e) => {
    setSearch(e.target.value)
    fetch(setMovieLists)
    return history.push('/searchpage')
  }

  const clickSearch = (e) => {
    e.preventDefault()
    setLists(!lists)
  }


  return (
    <div className={"searchEle"} >

      <div className="inputEle" >
        {lists &&
        <Input className="searchText" style={{width:'80%'}}  type="text" value={search} onChange={onChange} placeholder="제목을 입력하세요"/>
        }
        
        <span className="searchIcon" style={{ color: '#ffffff',padding:'10px 15px' }} onClick={clickSearch}><SearchOutlined style={{fontSize:'18px'}}/></span>
     
      </div>

      <div className={'searchMovie' + (lists ? "show" : "")} style={{ width: '100%', position: 'fixed', top: '100px', left: '0%', }} >
        <Row gutter={[24, 24]} style={{ width: '95%', margin: '0 auto', position: 'relative' }}>

          {movieLists && movieLists.map(movie => (
            movie.poster_path ?
              <Col  lg={3}  md={6} sm={24} xs={24}>

              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{ width: '100%' }}/>

            </Col> : null
          ))}

        </Row>
      </div>


    </div>
  )
}

export default SearchInput
