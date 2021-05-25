import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import Memo from './memo'

export default combineReducers({ Memo, form })
// formをformReducerにしていたため、MemoNewに記入できなかった。