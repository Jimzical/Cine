import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Autocomplete } from '@mantine/core';

function Recommender() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        console.log('useEffect');
        axios.get('http://127.0.0.1:8000/movies')
            .then(response => {
                setMovies(response.data.movies);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            <br />
            <br />

            <div>
                {movies.map((movie, index) => (
                    <div key={index}>{movie}</div>
                ))}
            </div>
        </div>
    );
}

export default Recommender;