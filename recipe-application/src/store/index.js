import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import RecipeReducer from './reducers/RecipeReducer'

const reducer = combineReducers ({
  RecipeReducer
})

const store = createStore( reducer, applyMiddleware(thunk)) 

export default store