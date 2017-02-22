import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

const rootReducer = combineReducers({
  firebase,
})

console.log("firebase", firebase);
console.log("rootReducer0", rootReducer);

export default rootReducer
