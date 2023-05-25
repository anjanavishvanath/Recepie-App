import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./index.css"

export default function App() {

  const [recipies, setRecipies] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  const APP_ID = '12695da5'
  const APP_KEY = '246041c30f9c7cf2c383800bfb0933bb'

  useEffect(() => {
    async function getData() {
      let URI = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      const response = await fetch(URI)
      const data = await response.json()
      setRecipies(data.hits)
    }

    getData()
  }, [query])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  const recipieElemets = recipies.map(recepie => (
    <Recipe
      key={Math.random() * 100}
      title={recepie.recipe.label}
      img={recepie.recipe.image}
      calories={recepie.recipe.calories.toFixed(2)}
      ingredidents = {recepie.recipe.ingredientLines}
    />
  ))

  return (
    <div className="App">
      <div className="heading">
        <h1 className="title">Recepies</h1>
      </div>
      <form className="search-form" >
        <input type="text" className="search-input" value={search} onChange={handleSearch} />
        <button className="search-button" onClick={handleClick}>Search</button>
      </form>

      <div className="recepies">
        {recipieElemets}
      </div>

    </div>
  )
}