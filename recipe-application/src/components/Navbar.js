import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div id="navigation-bar">
    <nav>
      <ul>
        <li><Link to="/" id="logo">Recipe App</Link></li>
      </ul>
    </nav>
  </div>
  )
}
