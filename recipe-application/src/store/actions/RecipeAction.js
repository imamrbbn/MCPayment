export function SET_LOADING (status) {
  
  return {
    type: "SET_LOADING",
    payload: status
  }

}

export function SET_ERROR (status) {

  return {
    type: "SET_ERROR",
    payload: status
  }
   
}

export function SET_RECIPES (status) {

  return {
    type: "SET_RECIPES",
    payload: status
  }
   
}

export function SET_RECIPE (status) {

  return {
    type: "SET_RECIPE",
    payload: status
  }
   
}

export function FETCH_RECIPES () {

  return (dispatch, getState) => {
    dispatch(SET_LOADING(true))
    
    fetch("https://recipe-puppy.p.rapidapi.com", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key": "762d71b17amsh46c955619dd85d0p195316jsn98298eca93bf",
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch (SET_RECIPES(data.results))
      })
      .catch(err => dispatch(SET_ERROR(err)))
      .finally(() => dispatch(SET_LOADING(false)))
    }
}