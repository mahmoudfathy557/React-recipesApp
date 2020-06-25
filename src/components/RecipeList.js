import React, { Component } from 'react'
import Recipe from './Recipe'
import { Spinner } from 'react-bootstrap'

class RecipeList extends Component {
  render() {
    const { recipes, loading } = this.props
    return (
      <>
        <div className='container py-5'>
          {/* {title} */}
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
              <h1 className='text-slanted'>recipe list</h1>
            </div>
          </div>
          {/* {end of title} */}
          {loading ? (
            <div className='row'>
              <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
                <Spinner animation='grow' variant='primary' />
                <Spinner animation='grow' variant='secondary' />
                <Spinner animation='grow' variant='success' />
                <Spinner animation='grow' variant='danger' />
                <Spinner animation='grow' variant='warning' />
                <Spinner animation='grow' variant='info' />
                <Spinner animation='grow' variant='dark' />
              </div>
            </div>
          ) : (
            <div className='row'>
              {recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      </>
    )
  }
}

export default RecipeList
