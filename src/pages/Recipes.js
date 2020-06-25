import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
export default class Recipes extends Component {
  state = {
    recipes: [],
    search: '',
    query: 'meat',
    loading: true,
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }

  componentDidMount() {
    const APP_ID = '6cef7119'
    const App_KEY = `${process.env.REACT_APP_API_KEY}`

    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${App_KEY}`
      )
      const data = await response.json()
      this.setState({ recipes: data.hits, loading: false })
    }

    getRecipes()
  }

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <RecipeList recipes={this.state.recipes} loading={this.state.loading} />
      </>
    )
  }
}
