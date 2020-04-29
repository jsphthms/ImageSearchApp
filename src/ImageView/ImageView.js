import React from 'react'
import { Link } from 'react-router-dom'


function ImageView(props) {
    const { largeImageURL, tags, user, pageURL } = props.location.state.pic
    return (
        <div>
            <button><Link to='/'>Home</Link></button>
            <img src={largeImageURL} alt={tags} srcset="" />
            <p>&copy;Pixabay</p>
            <h4>Credit: <span>{user}</span> </h4>
            <h4>Download: <span><a href={pageURL} target="_blank" rel="noopener noreferrer" > Url</a></span></h4>
        </div >
    )
}

export default ImageView
