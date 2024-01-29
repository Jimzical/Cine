import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './pages.css';

function Recommender() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [paddingTop, setPaddingTop] = useState('10%');
    const [recommendations, setRecommendations] = useState([]);

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

    const handleOnSelect = async (item) => {
        setSelectedMovie(item.name);
        setPaddingTop('2%');

        try {
            const response = await axios.get(`http://127.0.0.1:8000/recommendations/${item.name}?limit=9`);
            console.log(response);
            setRecommendations(response.data.recommendations);
        } catch (error) {
            console.error(error);
        }
    };

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        );
    };

    return (
        <div className='text-center mb-5 pt-4  lead display-4'>
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
            {selectedMovie && <p className='text-center h4 mt-3' style={{ animation: 'fadeIn 1s' }}>Movie Selected: {selectedMovie}</p>}
            
                {/* <div className="container mt-5">
                    {recommendations.map((movie, index) => (
                        <div key={index}>
                            {JSON.stringify(movie)}
                        </div>
                    ))}
                </div> */}

            <div className="container">
                <div className="row">
                    {selectedMovie && recommendations.map((movie, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card">
                                <img src={`https://picsum.photos/200?random=${index}`} alt="Card cap" className="card-img-top" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title mb-0" style={{ textTransform: 'capitalize' }}>{movie.original_title}</h5>
                                        <p className="card-text mb-0 text-muted h5">{movie.id}⭐</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Recommender;