import React from 'react'
import { useDispatch } from 'react-redux'

import { SET_ERROR } from '../../store/actions/RecipeAction'

function FormErrors() {
  const dispatch = useDispatch()
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
        width: "200px",
        height: "200px",
        margin: "auto",
        marginTop: '5vh'
    }

    function handleClickError() {
      dispatch(SET_ERROR(false))
    }

    return (
        <div style={loadingStyle}>
          <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_jq4i7W.json" 
            background="transparent"  speed="0.7"  
            style={lottieStyle} loop  autoplay></lottie-player>
          <h1 style={{color:"white"}}>Error! Cannot be empty</h1>
          <button className="btn btn-primary" onClick={handleClickError}>Understand</button>
        </div>
    )

}
export default FormErrors