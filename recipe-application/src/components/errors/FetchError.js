import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SET_ERROR } from '../../store/actions/RecipeAction'

function FormErrors() {
  const dispatch = useDispatch()
  const error = useSelector(state => state.RecipeReducer.error)

  const loadingStyle = {
      position: "absolute",
      top: "0",
      right:"0",
      left: "0",
      bottom:"0",
      backgroundColor:"rgb(0 0 0 / 80%)",
      zIndex:"3"
  }
  
  const lottieStyle = {
      width: "300px",
      height: "300px",
      margin: "auto",
      marginTop: '5vh'
  }

  function handleClickError() {
    dispatch(SET_ERROR(false))
  }

  return (
      <div style={loadingStyle}>
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_f1cFsO.json"  
          background="transparent"  speed="0.7"  
          style={lottieStyle} loop  autoplay></lottie-player>
        <h1 style={{color:"white"}}>Error!</h1>
        <h5> {error}</h5>
        <button className="btn btn-primary" onClick={handleClickError}>Understand</button>
      </div>
  )

}
export default FormErrors