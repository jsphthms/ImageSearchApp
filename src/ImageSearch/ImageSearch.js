import React from 'react'
import './ImageSearch.css'

export default function ImageSearch({ fetchPics }) {


    return (
        <div className='imageSearch'>
            <form onSubmit={fetchPics} className='imageSearch__form'>
                <input type="text" name="searchValue" autoComplete='off' placeholder="Search for images.." />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
