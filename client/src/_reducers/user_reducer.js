import { LOGIN_USER, REGISTER_USER, AUTH_USER,FETCH_TRENDING,FETCH_NETFLIX} from '../_actions/types'

//리듀서 ㅁ함수 만들기.
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
        movies:action.data
      }
      break
    case FETCH_NETFLIX:
      return {
        ...state,
        movies: action.data
      }
      break
    
    default:
      return state
  }
}

