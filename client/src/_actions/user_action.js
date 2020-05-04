import axios from 'axios';
import {API_KEY,API_URL,IMAGE_BASE_URL} from '../components/Config'
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  FETCH_TRENDING
} from './types';

export const fetchTrendData = (data) => {
  return {
    type:FETCH_TRENDING,
    data,
 
  }
}

export const fetchTrending = () => {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        dispatch(fetchTrendData(response.data))
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


