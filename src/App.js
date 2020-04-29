import React, { useState } from 'react';
import './App.css';
import ImageSearch from './ImageSearch/ImageSearch'
import ImageList from './ImageList/ImageList'
import "./styles/styles.css"

const KEY = `${process.env.REACT_APP_API_KEY}`;

function App() {

  const [pics, setPics] = useState([]);
  const [error, setError] = useState(null);


  const fetchPics = async (e) => {
    e.preventDefault();
    const QUERY = e.target.elements.searchValue.value
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${QUERY}&image_type=photo`
    const response = await fetch(URL);
    const data = await response.json();

    if (!QUERY) {
      setError('Enter a search term')
    } else {
      setPics(data.hits)
      setError(null)
    }

  }


  return (
    <div className="App">
      <ImageSearch fetchPics={fetchPics} />

      {
        error !== null ?
          <div style={{ color: '#fff', textAlign: 'center' }}>{error}</div> :
          <ImageList pics={pics} />
      }
    </div>
  );
}

export default App;
