import { FETCH_TOPRATED } from '../_actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TOPRATED:
      return {
        ...state,
        movies: action.data,
      }
    default:
      return state;
  }
}
