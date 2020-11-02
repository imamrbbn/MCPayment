const initialState = {
  loading : false,
  error : false,
  key : '',
  category : 'title'
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

    case "SET_KEY" : 
      return  {
        ...state,
        key: action.payload
      }

    case "SET_CATEGORY" : 
      return  {
        ...state,
        category: action.payload
      }

    default :
      return state
      
  }
}

export default RecipeReducer
