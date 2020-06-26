import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
export default class Recipes extends Component {
  state = {
    recipes: [],
    search: '',
    query: 'chicken',
    loading: true,
    error: '',
  }

  async getRecipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.state.query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    )
    const data = await response.json()
    if (data.hits.length === 0) {
      this.setState({
        error:
          'sorry but your search did not return any recipes, please try again',
      })
    } else {
      this.setState({ recipes: data.hits, loading: false, error: '' })
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { search } = this.state
    this.setState({ query: search, search: '' }, () => this.getRecipes())
    console.log(search, 'searchhhhhhh')
  }

  componentDidMount() {
    this.getRecipes()
  }

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className='row'>
              <div className='col'>
                <h2 className='text-orange text-center text-uppercase mt-5'>
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList
            recipes={this.state.recipes}
            loading={this.state.loading}
          />
        )}
      </>
    )
  }
}
