import React from 'react'
import { Link } from 'react-router-dom'


function ImageView(props) {
    const { largeImageURL, tags, user, pageURL } = props.location.state.pic
    return (
        <div className='container'>
            <div className='row'>

                <div className='imageView__container'>
                    <button><Link to='/'>Home</Link></button>
                    <img className='imageView__img img-responsive' src={largeImageURL} alt={tags} srcset="" />
                    <div className="imageView__copyright">
                        <p>&copy;Pixabay</p>
                    </div>
                    <h4>Credit: <span>{user}</span> </h4>
                    <h4>Download: <span><a href={pageURL} target="_blank" rel="noopener noreferrer" > URL</a></span></h4>
                </div >
            </div >

        </div >
    )
}

export default ImageView
