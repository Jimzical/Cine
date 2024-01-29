import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './pages.css';
function Recommender() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [paddingTop, setPaddingTop] = useState('10%');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/movies?limit=-1');
                setMovies(response.data.movies.map((movie, index) => ({ id: index, name: movie.original_title })));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleOnSearch = (string, results) => {
        console.log(string, results);
    };

    const handleOnSelect = (item) => {
        setSelectedMovie(item.name);
        setPaddingTop('2%');
    };

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        );
    };

    return (
        <div className='text-center mb-5 pt-2  lead display-4'>
            Recommendations
            <div className='d-flex justify-content-center align-items-center' style={{ paddingTop, transition: 'padding-top 0.5s' }}>
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={movies}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </div>
            {selectedMovie && <p className='text-center h4 mt-3' style={{ animation: 'fadeIn 1s' }}>Movie Selected: {selectedMovie}</p>}        </div>
    );
}

export default Recommender;