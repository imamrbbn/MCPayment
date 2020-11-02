import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import RecipeReducer from './reducers/RecipeReducer'
import SearchKeyReducer from './reducers/SearchKeyReducer'

const reducer = combineReducers ({
  RecipeReducer,
  SearchKeyReducer
})

const store = createStore( reducer, applyMiddleware(thunk)) 

export default store