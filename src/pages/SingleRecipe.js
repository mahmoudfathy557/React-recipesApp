import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SingleRecipe extends Component {
  state = {
    recipe: [],
    id: '',
    loading: true,
  }

  componentDidMount() {
    const APP_ID = '6cef7119'
    const App_KEY = `${process.env.REACT_APP_API_KEY}`
    const id = this.props.match.params.id
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${App_KEY}`
      )
      const data = await response.json()

      this.setState({
        recipe: data.hits[0].recipe,
        id: data.hits[0].recipe.label,
        loading: false,
      })
    }

    getRecipes()
  }

  render() {
    const {
      image,
      label,
      url,
      source,
      ingredients,
      shareAs,
    } = this.state.recipe
    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h2 className='text-uppercase text-orange text-center'>
                loading recipe....
              </h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Link
              to='/recipes'
              className='btn btn-warning mb-5 text-capatilize'
            >
              back to recipes list
            </Link>
            <img
              src={image}
              className='d-block w-100'
              style={{ maxHeight: '30rem' }}
              alt='recipe'
            />
          </div>
          {/* info */}
          <div className='col-10 mx-auto col-md-6 my-3'>
            <h6 className='text-uppercase'>{label}</h6>
            <h6 className='text-warning text-capitalize text-slanted'>
              provided by {source}
            </h6>
            <a
              href={shareAs}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mt-2 text-capitalize'
            >
              publisher webpage
            </a>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mt-2 mx-2 text-capitalize'
            >
              recipe url
            </a>
            <ul className='list-group mt-4'>
              <h2 className='mt-3 mb-4'>Ingredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className='list-group-item text-slanted'>
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
