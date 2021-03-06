import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  FETCH_TRENDING,
  FETCH_TOPRATED,
  FETCH_NETFLIX,
  FETCH_NEWMOVIE
} from './types';
import dotenv from 'dotenv'
dotenv.config()
const apikey = process.env.REACT_APP_API_KEYL

//액션 생성 함수 만들기 ,  data는 파라미터. 파라미터는 액션 객체 안에 추가 필드로 들어간다.
export const fetchTrendData = (data) => {
  return {
    type:FETCH_TRENDING,
    data,
  }
}

export const fetchTrending = () => {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}&language=ko`)
      .then(response => {
        dispatch(fetchTrendData(response.data))
        
      })
      
      .catch(error => {
        throw(error);
      })
    }
}

export const fetchNewMovieData = (data) => {
  return {
    type:FETCH_NEWMOVIE,
    data,
  }
}

export const fetchNewMovie = () => {
  return (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=ko`)
    .then(response => {
      dispatch(fetchNewMovieData(response.data))
    })
    .catch(error => {
      throw(error);
    })
  }
}


export const fetchTopRatedData = (data) => {
  return {
    type: FETCH_TOPRATED,
    data,
  }
}

export const fetchTopRated = () => {
  return (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=ko`)
    .then(response => {
      dispatch(fetchTopRatedData(response.data))
    })
    .catch(error => {
      throw(error);
    })
  }
}

export const fetchNetFlixData = (data) => {
  return {
    type: FETCH_NETFLIX,
    data,
  }
}

export const fetchNetFlix =() => {
  return (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/discover/tv?&api_key=${apikey}&with_networks=213&language=ko`)
    .then(response => {
      dispatch(fetchNetFlixData(response.data))
      
    })
    .catch(error => {
      throw(error);
    })
  }
}

export function loginUser (dataToSubmit) {
  const request = axios.post('/api/users/login', dataToSubmit)
  .then(response =>response.data)
  // 서버에다가 request 날린다음 data로 받아.
  return{
    // request를 리듀서에 넘겨주는거
  type: LOGIN_USER,
  payload: request
  }
}

export function registerUser (dataToSubmit) {
  const request = axios.post('/api/users/register', dataToSubmit)
  .then(response =>response.data)
  // 서버에다가 request 날린다음 data로 받아.
  
  return{
    // request를 리듀서에 넘겨주는거
    type: REGISTER_USER,
    payload: request
  }
}

export function auth () {
  const request = axios.get('/api/users/auth')
  .then(response =>response.data)
  // 서버에다가 request 날린다음 data로 받아.
  return{
    // request를 리듀서에 넘겨주는거
    type: AUTH_USER,
    payload: request
  }
}

