import { handleActions } from 'redux-actions'
import {
  SET_ACCESSTOKEN,
  SET_TIMESTAMP,
  SET_USERINFO,
  SET_SCHOOLNAME,
  SET_SUBMIT
} from '../types/global'

export default handleActions({
  [SET_ACCESSTOKEN] (state, action) {
    return {
      ...state,
      accessToken: action.payload
    }
  },
  [SET_TIMESTAMP] (state, action) {
    return {
      ...state,
      timeStamp: action.payload
    }
  },
  [SET_USERINFO] (state, action) {
    return {
      ...state,
      userInfo: action.payload
    }
  },
  [SET_SCHOOLNAME] (state, action) {
    return {
      ...state,
      schoolName: action.payload
    }
  },
  [SET_SUBMIT] (state, action) {
    return {
      ...state,
      submit: action.payload
    }
  }
}, {
  accessToken: '',
  timeStamp: 0,
  userInfo: null,
  schoolName: '',
  submit: true
})