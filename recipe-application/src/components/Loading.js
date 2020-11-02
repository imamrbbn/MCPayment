import React from 'react'

function Loading() {
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
        width: "400px",
        height: "400px",
        margin: "auto",
        marginTop: '5vh'
    }

    return (
        <div style={loadingStyle}>

            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_UGvCSC/loading_animation.json" 
                background="transparent"  speed="1"  
                style={lottieStyle} loop  autoplay></lottie-player>

            <h1 style={{color:"white"}}>Loading...</h1>
        </div>
    )

}
export default Loading