import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

function Recommender() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/movies')
            .then(response => {
                setMovies(response.data.movies);
                setFilteredMovies(response.data.movies); // Initially, set filtered movies to all movies
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const debouncedSearch = debounce((searchTerm) => {
        // Filter movies based on the debounced search term
        const filtered = movies.filter(movie =>
            movie.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, 300);

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);
        debouncedSearch(searchTerm);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(search);
        // Optionally, you can perform a search operation here
    };

    return (
        <div className="container text-center">
            <br />
            <br />
            <form onSubmit={handleFormSubmit} className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for Movie Recommendations"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    value={search}
                    onChange={handleInputChange}
                />
            </form>
            <div className="list-group">
                {filteredMovies.map((movie, index) => (
                    <div key={index} className="list-group-item">
                        {movie}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommender;