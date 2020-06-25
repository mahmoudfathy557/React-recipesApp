import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Recipe extends Component {
  render() {
    const { image, label, url, source } = this.props.recipe.recipe

    return (
      <div className='col-10 mx-auto col-md-6 col-lg-4 my-3  '>
        <div className='card' style={{ height: '100%' }}>
          <img
            src={image}
            style={{ height: '14rem' }}
            className='img-card-top'
            alt='img recipe'
          />
          <div className='card-body text-capitalize'>
            <h6>{label}</h6>
            <h6 className='text-warning text-slanted'>provided by {source}</h6>
          </div>
          <div className='card-footer'>
            <Link
              to={`/recipes/${label}`}
              className='btn btn-primary text-capitalize'
            >
              details
            </Link>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mx-2 text-capitalize'
            >
              recipe url
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe
