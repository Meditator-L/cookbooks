import {combineReducers} from 'redux';
import { reducer as cookbook } from '../Home/cookbook';

const reudcer =  combineReducers(
  {cookbook}
)

export default reudcer