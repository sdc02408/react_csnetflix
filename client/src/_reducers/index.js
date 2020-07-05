import {combineReducers} from 'redux';
import user from './user_reducer';
import trendingReducer from './user_reducer'
import topratedReducer from './user_reducer'
import netflixReducer from './user_reducer'
import newmovieReducer from './user_reducer'
// import favorite from './user_reducer'
// import comment from './comment_reducer';
//스토어가 있는데 리듀서가 여러가지 있어. 어떻게 state가 변하는것을 보여주고 값을 return 해주는것.

const rootReducer = combineReducers({
  user:user,
  trending: trendingReducer,
  toprated: topratedReducer,
  netflix: netflixReducer,
  newmovie: newmovieReducer
})

export default rootReducer;
