import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recommender() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/movies?limit=-1');
        setMovies(response.data.movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-center mb-5 lead display-4'>
      Recommendations
    <div>
        {movies.map((movie, index) => (
            <p key={index}>{movie.original_title}</p>
        ))}
    </div>
    </div>
  );
}

export default Recommender;