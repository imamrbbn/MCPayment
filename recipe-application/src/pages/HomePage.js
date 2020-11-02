import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import logo from '../logo.svg';
import { FETCH_RECIPES } from '../store/actions/RecipeAction'
import RecipeCard from '../components/RecipeCard'

export default function HomePage() {
  const dispatch = useDispatch()
  const [key, setKey] = useState('')
  const recipes = useSelector(state => state.RecipeReducer.recipes)
  const loading = useSelector(state => state.RecipeReducer.loading)

  useEffect(() => {
    dispatch(FETCH_RECIPES())
  }, [dispatch])

  if(loading) <p>{'loading'}</p>;

  function handleSearchRecipe(event) {
    setKey(event.target.value)
  }
  
  return (
    <div>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <div className="search-box">
        <input type="text" placeholder="input here.." 
          onChange={handleSearchRecipe}/>
      </div>

      <div className="row">
        {recipes && recipes.filter(eachRecipe => 
          eachRecipe.title.toLowerCase()
          .includes(key.toLowerCase()))
          .map((eachRecipe, index) => {
            return(
              <div className="col">
                <RecipeCard 
                  recipe = {eachRecipe}
                  key = {index} 
                  />
              </div>
            )
        })}

      </div>

    </div>
  )
}
