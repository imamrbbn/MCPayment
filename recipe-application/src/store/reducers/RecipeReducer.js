const initialState = {
  loading : false,
  error : false,
  recipes : null,
  recipe : null
} 

function RecipeReducer (state = initialState, action) {

  switch (action.type) {
    
    case "SET_LOADING" : 
      return  {
        ...state,
        loading: action.payload
      }
    
    case "SET_ERROR" : 
      return  {
        ...state,
        error: action.payload
      }

    case "SET_RECIPES" : 
      return  {
        ...state,
        recipes: action.payload
      }

    case "SET_RECIPE" : 
      return  {
        ...state,
        recipe: action.payload
      }
    
    default :
      return state
      
  }
}

export default RecipeReducer
