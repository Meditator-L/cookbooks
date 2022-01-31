import {combineReducers} from 'redux';
import { reducer as cookbook } from '../Home/cookbook';
import {reducer as home } from '../Home';
const reudcer =  combineReducers(
  {
    cookbook,
    home
  }
)

export default reudcer