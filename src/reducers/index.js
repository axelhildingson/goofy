import result from './result';
import search from './search';
import { combineReducers } from 'redux'

const goofy = combineReducers({
  result,
  search
})

export default goofy
