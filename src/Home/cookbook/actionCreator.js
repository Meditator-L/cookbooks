import {LOADDATA} from './actionTypes';
import {get} from '@u/http.js';
const loadDataSync = list => {
  return {
    type:LOADDATA,
    list
  }
}

const loadDataAsync = () => {
  return async ( dispatch) => {
    await get({
     url:''
   })
  }
}
export {
  loadDataSync,
  loadDataAsync
}