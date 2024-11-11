import React from 'react'
import './SearchInput.css'

const SearchInput = (props) => {
  return (
    <div className='SearchInput'>
        <input type="text"  placeholder={props.placeholder}/>
        <img src="/icons/search.svg" alt="" />
    </div>

  )
}

export default SearchInput