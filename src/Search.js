import React from 'react'
import './App.css'

const Search = ({handleInput, SearchResult}) => {
  return (
    <div className='search-input myt-3 mb-5'>
        <input type='text' name='movie' className='w-50 p-2 mine' placeholder='Search a movie....' onChange={handleInput}
        onKeyDown={SearchResult}></input>
    </div>
  )
}

export default Search