import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

import { SET_KEY, SET_CATEGORY, SET_ERROR } from '../store/actions/SearchKeyAction'
import { FETCH_RECIPES } from '../store/actions/RecipeAction'

export default function Navbar() {
  const dispatch = useDispatch()
  const [key, setKey] = useState('')
  const [category, setCategory] = useState('title')
  
  function handleSearchRecipe(event) {
    setKey(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleReset() {
    dispatch(FETCH_RECIPES())
    dispatch(SET_CATEGORY('title'))
    dispatch(SET_KEY(''))
  }
  
  function handleSubmitSearch(event) {
    event.preventDefault()
    if(!key) dispatch(SET_ERROR(true))
    else {
      dispatch(SET_KEY(key))
      dispatch(SET_CATEGORY(category))
    }
  }

  return (
    <div>
    <nav className="navbar navbar-light bg-light">
      <span  onClick={handleReset}>
        <Link id="logo" to='/' >Recipe App</Link>
      </span>
      <form className="form-inline" onSubmit={handleSubmitSearch}>

        <select className="option-box" onChange={handleCategory}>
          <option value="empty" disabled>Choose...</option>
          <option value="title">Title</option>
          <option value="ingredients">Ingredients</option>
        </select>

        <input className="form-control" type="search" 
          placeholder="Search" aria-label="Search"
          onChange={handleSearchRecipe}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>
  </div>
  )
}
