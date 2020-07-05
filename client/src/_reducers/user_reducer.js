import { LOGIN_USER, REGISTER_USER, AUTH_USER,FETCH_TRENDING,FETCH_NETFLIX,FETCH_NEWMOVIE,FETCH_TOPRATED} from '../_actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }
      break
    case REGISTER_USER:
      return { ...state, register: action.payload }
      break
    case AUTH_USER:
      return { ...state, userData: action.payload }
      break
    case FETCH_TRENDING:
      return {
        ...state,
        trending:action.data
      }
      break
    case FETCH_NETFLIX:
      return {
        ...state,
        movies: action.data
      }
      break
    case FETCH_NEWMOVIE:
      return {
        ...state,
        newMovie: action.data
      }
      break
    case FETCH_TOPRATED:
      return {
        ...state,
        topmovies: action.data,
      }
    default:
      return state
  }
}

