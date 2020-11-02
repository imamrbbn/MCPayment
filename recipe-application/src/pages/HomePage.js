import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_RECIPES } from '../store/actions/RecipeAction'
import RecipeCard from '../components/RecipeCard'
import Loading from '../components/Loading'
import FormErrors from '../components/errors/FormErrors'
import FetchError from '../components/errors/FetchError'

export default function HomePage() {
  const dispatch = useDispatch()

  const recipes = useSelector(state => state.RecipeReducer.recipes)
  const loading = useSelector(state => state.RecipeReducer.loading)
  const key = useSelector(state => state.SearchKeyReducer.key)
  const category = useSelector(state => state.SearchKeyReducer.category)
  const formError = useSelector(state => state.SearchKeyReducer.error)
  const fetchError = useSelector(state => state.RecipeReducer.error)
  
  useEffect(() => {
    dispatch(FETCH_RECIPES())
  }, [dispatch])

  if (loading) return <Loading/>
  if (formError) return <FormErrors/>
  if (fetchError) return <FetchError/>


  return (
    <div className="container">
      <div className="row">
        
        {recipes && recipes.filter(eachRecipe => 
          eachRecipe[category].toLowerCase()
          .includes(key.toLowerCase()))
          .map((eachRecipe, index) => {
            return(
              <div className="col card-margin">
                <RecipeCard 
                  key={index}
                  recipe = {eachRecipe}
                  
                  />
              </div>
            )
        })}

      </div>

    </div>
  )
}
