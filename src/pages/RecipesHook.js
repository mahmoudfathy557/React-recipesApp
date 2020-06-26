import React, { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'

function RecipesHook() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    setLoading(false)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
    console.log(search)
    setSearch('')
  }

  return (
    <>
      <Search
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <RecipeList recipes={recipes} loading={loading} />
    </>
  )
}

export default RecipesHook
