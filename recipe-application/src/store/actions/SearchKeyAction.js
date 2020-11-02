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

export function SET_KEY (data) {

  return {
    type: "SET_KEY",
    payload: data
  }
  
}

export function SET_CATEGORY (data) {

  return {
    type: "SET_CATEGORY",
    payload: data
  }

}
