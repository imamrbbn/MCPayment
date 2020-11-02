import React from 'react'

export default function RecipeCard(props) {
  const {title, href, ingredients, thumbnail} = props.recipe

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={thumbnail} alt='thumbnail' width="300px"  />
      <div>
        <p>Ingredients : {ingredients}</p>
        <a
            className="App-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
      </div>
    </div>
  )
}
