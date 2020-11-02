import React from 'react'

export default function RecipeCard(props) {
  const {title, href, ingredients, thumbnail} = props.recipe

  return (
    <div className="card" style={{width: "20vw", height:"65vh"}}>

      <img src={thumbnail} className="card-img-top" 
        alt="thumbnail" style={{width:"50%"}}/>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <div className="overflow">
          <p className="card-text">Ingredients : {ingredients}</p>
        </div>
      </div>

      <div className="card-footer">
        <a href={href} className="btn btn-primary">More Detail</a>
      </div>
      
    </div>
  )
}
