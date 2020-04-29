import React from 'react'
import './ImageList.css'
import { Link } from 'react-router-dom'

export default function ImageList({ pics }) {
    return (
        <div className='container'>
            <div className='row'>
                {pics.length > 0 && pics.map((pic) => (
                    <div key={pic.id} className='col-md-4' style={{ marginBottom: '2rem' }}>
                        <div className='imageList__container'>
                            <img className='imageList__image' src={pic.largeImageURL} alt='tags' />
                        </div>
                        <div className='image__details'>
                            <Link to={{
                                pathname: `/image/${pic.id}`,
                                state: { pic }
                            }}>
                                <button>View</button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
