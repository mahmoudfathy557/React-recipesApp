import React, { Component } from 'react'

class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props
    console.log(search)

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
            <h1 className='text-slanted text-capitalize'>
              search recipes with{' '}
              <strong className='text-orange'>Food2Fork</strong>
            </h1>
            <form className='mt-4'>
              <label htmlFor='search' className='text-capitalize'>
                {' '}
                type recipes seperated by comma
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  name='search'
                  className='form-control'
                  placeholder='chicken,onion,carrots'
                  onChange={handleChange}
                  value={search}
                />
                <div className='input-group-append'>
                  <button
                    type='submit '
                    className='input-group-text bg-primary text-white'
                    onClick={handleSubmit}
                  >
                    <i className='fas fa-search'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
